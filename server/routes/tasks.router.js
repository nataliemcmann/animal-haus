const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
    // GET route code here
});

/**
 * POST route 
 */
router.post('/', (req, res) => {
    //separate out petID --not sure where this will come from yet
    //sql values contains
    const sqlValues = [req.body.taskDesc, req.body.frequency, req.body.petID];
    //new task query
    const sqlQuery = `
    INSERT INTO "tasks"
        ("taskDesc", "frequency", "petID")
    VALUES 
        ($1, $2, $3);
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Task creation failed: ', err);
        res.sendStatus(500);
    });
});

module.exports = router;

