//might need to get rid of this file because it is not working

const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

// checks that household exists
const authenticateHousehold = (req, res, next) => router.get(
    'custom',
    (householdName, householdCode) => {
    pool
    .query('SELECT * FROM "households" WHERE householdName = $1', [householdName])
    .then((result) => {
        const household = result && result.rows && result.rows[0];
        if (household && encryptLib.comparePassword(householdCode, household.householdCode)) {
        // All good! Passwords match!
        next(household);
        } else {
        // Not good! Household name and code do not match.
        // done takes an error (null in this case) and a Household (also null in this case)
        // this will result in the server returning a 401 status code
        res.sendStatus(401);
        }
    })
    .catch((error) => {
        console.log('Error with query for household ', error);
        // done takes an error (we have one) and a Household (null in this case)
        // this will result in the server returning a 500 status code
        res.sendStatus(500);
    });
})


module.exports = { authenticateHousehold };

