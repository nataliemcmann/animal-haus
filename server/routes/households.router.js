const { sliderClasses } = require('@mui/material');
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { checkHouseholdRelation } = require('../modules/household-login-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const { authenticateHousehold } = require('../strategies/households.strategy');

const router = express.Router();

//handles post of new household data and admin creation
router.post('/register', async (req, res, next) => {
    const adminId = req.user.id;
    const householdName = req.body.householdName;
    const householdCode = encryptLib.encryptPassword(req.body.householdCode);

    //series of sql queries
    const beginQuery = `
    --Start of transaction
    BEGIN;
    `
    const householdQuery = `
    INSERT INTO "households" 
        ("adminId", "householdName", "householdCode")
    VALUES 
        ($1, $2, $3) RETURNING "id";
    `
    const relationQuery = `
    INSERT INTO "households_user"
        ("userId", "householdId")
    VALUES ($1, $2);    
    `

    const commitQuery = `
    COMMIT;
    --end of transaction
    `

    const rollbackQuery = `
    ROLLBACK;
    --reverse last transaction
    `

    pool.query(beginQuery)
    .then((res) => {
        return pool.query(householdQuery, [adminId, householdName, householdCode]);
    })
    .then ((res) => {
        return pool.query(relationQuery, [adminId, res.rows[0].id]) 
    })
    .then((res) => {
        return pool.query(commitQuery)
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
        pool.query(rollbackQuery)
        console.log('Household registration failed: ', err);
        res.sendStatus(500);
    })
    .catch((err) => {
        console.log('error rolling back transaction')
    });
});

//logs in
router.post('/login', async (req, res) => {
    const householdName = req.body.householdName;
    const householdCode = req.body.householdCode;
    const sqlQuery = `
        SELECT * FROM "households" WHERE "householdName" = $1
    `
    try {
        const result = await pool.query(sqlQuery, [householdName])
        const household = result.rows[0];
        // console.log(household);
        if (household && encryptLib.comparePassword(householdCode, household.householdCode)) {
        // All good! Passwords match!
        res.send(household);
        } else {
        // Not good! Household name and code do not match.
        // done takes an error (null in this case) and a Household (also null in this case)
        // this will result in the server returning a 401 status code
        res.sendStatus(401);
        }
    } catch (error) {
        console.log('Error in household login ', error);
        // done takes an error (we have one) and a Household (null in this case)
       // this will result in the server returning a 500 status code
        res.sendStatus(500);
    }
});


//handles post of new household_user relation (which occurs upon log-in)
router.post('/newMember', authenticateHousehold('custom'), checkHouseholdRelation, (req, res) => {
    const userId = req.user.id;
    const householdId = req.body.id;

    const sqlQuery = `
    INSERT INTO "households_user" 
        ("userId", "householdId")
    VALUES 
        ($1, $2);
    `
    pool.query(sqlQuery, [userId, householdId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Household_user relation failed: ', err);
        res.sendStatus(500);
    });
});



module.exports = router;