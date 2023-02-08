const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const addTaskStatus = require('../modules/taskStatus');

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

//GET by pet id
router.get('/:petID', (req, res) => {
    // get specific pet id from params
    const sqlValues = [req.params.petID];
    const sqlQuery = `
    SELECT 
        "tasks"."id",
        "tasks"."taskDesc",
        "tasks"."frequency",
        "task_complete"."timeCompleted",
        "tasks_user"."userID"
    FROM "tasks"
        LEFT JOIN "task_complete"
            ON "tasks"."id" = "task_complete"."taskID"
        LEFT JOIN "tasks_user"
            ON "tasks"."id" = "tasks_user"."taskID"
        WHERE "tasks"."petID" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        let taskArray = addTaskStatus(result.rows);
        res.send(taskArray);
    })
    .catch(err => {
        console.log('GET:petID task failed: ', err);
    });
});

module.exports = router;

