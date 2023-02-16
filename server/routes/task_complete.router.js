const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const rejectUnauthenticated = require('../modules/authentication-middleware')


//Post task-complete
router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlValues = [req.body.taskID];
    const sqlQuery = `
    INSERT INTO "task_complete"
        ("taskID")
    VALUES
        ($1);
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Task-complete post failed: ', err);
        res.sendStatus(500);
    })
})

module.exports = router;