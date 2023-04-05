const { sliderClasses } = require('@mui/material');
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const householdStrategy = require('../strategies/households.strategy');

const router = express.Router();

//handles post of new household data
router.post('/register', (req, res, next) => {
    const adminId = req.user.id;
    const householdName = req.body.householdName;
    const householdCode = encryptLib.encryptPassword(req.body.householdCode);

    const sqlQuery = `
    INSERT INTO "households" 
        (adminId, householdName, householdCode)
    VALUES 
        ($1, $2, $3) RETURNING "id";
    `
    pool.query(sqlQuery, [adminId, householdName, householdCode])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Household registration failed: ', err);
        res.sendStatus(500);
    });
});


//handles post of new household_user relation

module.exports = router;