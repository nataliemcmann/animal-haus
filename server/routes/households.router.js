const { sliderClasses } = require('@mui/material');
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const householdStrategy = require('../strategies/households.strategy');

const router = express.Router();

//handles post of new household data and admin creation
router.post('/register', async (req, res, next) => {
    const adminId = req.user.id;
    const householdName = req.body.householdName;
    const householdCode = encryptLib.encryptPassword(req.body.householdCode);

    const householdQuery = `
    --Start of transaction
    BEGIN;

    INSERT INTO "households" 
        ("adminId", "householdName", "householdCode")
    VALUES 
        ($1, $2, $3) RETURNING "id";
    `
    const relationQuery = `
    INSERT INTO "households_user"
        ("userId", "householdId")
    VALUES ($1, $2);

    COMMIT;
    --end of transaction
    `
    const response = await pool.query(householdQuery, [adminId, householdName, householdCode]);
    pool.query(relationQuery, [adminId, response.rows[0].id]) 
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Household registration failed: ', err);
        res.sendStatus(500);
    });
});

//handles post of new household_user relation
router.post('/newMember', householdStrategy.authenticate('custom'), (req, res) => {
    const userId = req.user.id;
    const householdId = req.household.id;

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