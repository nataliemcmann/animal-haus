const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//POST task-user relation
router.post('/', (req, res) => {
    const sqlValues = [req.body.taskID, req.user.id];
    const sqlQuery = `
    INSERT INTO "tasks_user"
        ("taskID", "userID")
    VALUES
        ($1, $2);
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Task-user relation post failed: ', err);
        res.sendStatus(500);
    })
})

//delete task-user relation
router.delete('/', (req, res) => {
    const sqlValues = [req.body.claimID]
    const sqlQuery = `
    DELETE FROM "tasks_user"
        WHERE "id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Task-user relation delete failed: ', err);
        res.sendStatus(500);
    })
})

module.exports = router;