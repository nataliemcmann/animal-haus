const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const sortTasks = require('../modules/sortTasks');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { checkIfAdmin } = require('../modules/admin-action-middleware');


/**
 * GET all route 
 */
router.get('/household/:id', rejectUnauthenticated, (req, res) => {
    console.log('getting tasks');
    const householdId = req.params.id;
    const sqlQuery = `
    SELECT 
        "tasks"."id",
        "tasks"."taskDesc",
        "tasks"."frequency",
        "tasks"."petID",
        "task_complete"."timeCompleted",
        "pets"."name",
        JSON_AGG(
            JSON_BUILD_OBJECT(
            'claimID', "tasks_user"."id",
            'userID', "tasks_user"."userID",
            'username', "user"."username")
        ) AS "taskUserRelation"
    FROM "tasks"
        LEFT JOIN "pets"
            ON "tasks"."petID" = "pets"."id"
        LEFT JOIN "task_complete"
            ON "tasks"."id" = "task_complete"."taskID"
        LEFT JOIN "tasks_user"
            ON "tasks"."id" = "tasks_user"."taskID"
        LEFT JOIN "user"
        	ON "tasks_user"."userID" = "user"."id"
    WHERE "pets"."householdId" = $1
        GROUP BY "tasks"."id", "pets"."name", "task_complete"."timeCompleted"
	    ORDER BY "tasks"."id", "task_complete"."timeCompleted" DESC;
    `;
    pool.query(sqlQuery, [householdId])
    .then((result) => {
        let taskArray = sortTasks(result.rows);
        res.send(taskArray);
    })
    .catch(err => {
        console.log('GET tasks failed: ', err);
    });
});


/**
 * GET by user route 
 */
router.get('/user', rejectUnauthenticated, (req, res) => {
    console.log('getting user tasks');
    const sqlValues = [req.user.id]
    const sqlQuery = `
    SELECT 
        "tasks"."id",
        "tasks"."taskDesc",
        "tasks"."frequency",
        "tasks"."petID",
        "task_complete"."timeCompleted",
        "pets"."name",
        JSON_AGG(
            JSON_BUILD_OBJECT(
            'claimID', "tasks_user"."id",
            'userID', "tasks_user"."userID")
        ) AS "taskUserRelation"
    FROM "tasks"
        LEFT JOIN "pets"
            ON "tasks"."petID" = "pets"."id"
        LEFT JOIN "task_complete"
            ON "tasks"."id" = "task_complete"."taskID"
        LEFT JOIN "tasks_user"
            ON "tasks"."id" = "tasks_user"."taskID"
        WHERE "tasks_user"."userID" = $1
        GROUP BY "tasks"."id", "pets"."name", "task_complete"."timeCompleted"
        ORDER BY "tasks"."id", "task_complete"."timeCompleted" DESC;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        let taskArray = sortTasks(result.rows);
        // console.log(taskArray);
        res.send(taskArray);
    })
    .catch(err => {
        console.log('GET tasks failed: ', err);
    });
});

/**
 * POST TASK route 
 */
router.post('/', rejectUnauthenticated, checkIfAdmin, (req, res) => {
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

//Put task by id
router.put('/:id', rejectUnauthenticated, (req, res) => {
    //get id of pet to update
    let idToEdit = req.params.id;
    //grab task object
    let editTaskObject = req.body;
    //values to inject into query
    const sqlValues = [editTaskObject.taskDesc, 
        editTaskObject.frequency, idToEdit];
    //put edit task query
    const sqlQuery = `
    UPDATE "tasks"
        SET 
            "taskDesc" = $1,
            "frequency" = $2
        WHERE "id" = $3;
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Task edit failed: ', err);
        res.sendStatus(500);
    });
});

//Delete task by id
router.delete('/:id', rejectUnauthenticated,(req, res) => {
    const sqlValues = [req.params.id];
    const sqlQuery = `
    DELETE FROM "tasks"
    WHERE "id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Task deletion failed: ', err);
        res.sendStatus(500);
    });
})

//GET single task
router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlValues = [req.params.id];
    const sqlQuery = `
    SELECT * FROM "tasks"
        WHERE "id" = $1;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Get single task failed: ', err);
        res.sendStatus(500);
    })
})

//GET by pet id
router.get('/pet/:petID', rejectUnauthenticated, (req, res) => {
    console.log('getting pet tasks');
    // get specific pet id from params
    const sqlValues = [req.params.petID];
    const sqlQuery = `
    SELECT 
        "tasks"."id",
        "tasks"."taskDesc",
        "tasks"."frequency",
        "tasks"."petID",
        JSON_AGG(
            JSON_BUILD_OBJECT(
            'claimID', "tasks_user"."id",
            'userID', "tasks_user"."userID")
        ) AS "taskUserRelation"
    FROM "tasks"
        LEFT JOIN "tasks_user"
            ON "tasks"."id" = "tasks_user"."taskID"
        WHERE "tasks"."petID" = $1
        GROUP BY "tasks"."id";
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('GET:petID task failed: ', err);
    });
});


module.exports = router;

