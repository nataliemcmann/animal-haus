const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { checkIfAdmin } = require('../modules/admin-action-middleware');

/**
 * GET route template
 */
router.get('/household/:id', rejectUnauthenticated, (req, res) => {
    const householdId = req.params.id;
    const sqlQuery = `
    SELECT * FROM "pets"
    WHERE "householdId" = $1;
    `;
    pool.query(sqlQuery, [householdId])
    .then((result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('GET all pets failed', err);
    });
});

//GET/:id route
router.get('/:id', rejectUnauthenticated, (req, res) => {
    //get specific pet id from params
    const sqlValues = [req.params.id];
    const sqlQuery = `
    SELECT * FROM "pets"
        WHERE "id" = $1;`;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('GET:id pet failed', err);
    })
});


/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, checkIfAdmin, (req, res) => {
    //create an array of req.body values plus userIdto inject into the query
    const sqlValues = [req.body.name, req.body.age, 
                        req.body.foodDesc, req.body.cupsPerFeeding,
                        req.body.exerciseDesc, req.body.exerciseMin,
                        req.body.householdId];
    //post new pet query                    
    const sqlQuery = `
    INSERT INTO "pets"
        ("name", "age", "foodDesc", "cupsPerFeed",
        "exerciseDesc", "exerciseMin", "householdId")
    VALUES
        ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id;
    `;
    pool.query(sqlQuery, sqlValues)
    .then((result) => {
        const petID = result.rows[0].id;
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('Pet creation failed: ', err);
        res.sendStatus(500);
    });
});

//PUT by id route
router.put('/:id', rejectUnauthenticated, checkIfAdmin, (req, res) => {
    //get id of pet to update
    let idToEdit = req.params.id;
    //grab pet object
    let editPetObject = req.body;
    //values to inject into query
    const sqlValues = [editPetObject.name, editPetObject.age, 
                    editPetObject.foodDesc, editPetObject.cupsPerFeed,
                    editPetObject.exerciseDesc, editPetObject.exerciseMin, idToEdit];
    //put edit pet query
    const sqlQuery = `
    UPDATE "pets"
        SET 
            "name" = $1,
            "age" = $2,
            "foodDesc" = $3,
            "cupsPerFeed" = $4,
            "exerciseDesc" = $5,
            "exerciseMin" = $6
        WHERE "id" = $7;
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Pet edit failed: ', err);
        res.sendStatus(500);
    });
});

//DELETE by id route
router.delete('/:id', rejectUnauthenticated, checkIfAdmin, (req, res) => {
    //get id of pet to delete
    const sqlValues = [req.params.id];
    const sqlQuery = `
    DELETE FROM "pets"
    WHERE "id" = $1;`;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Pet deletion failed: ', err);
        res.sendStatus(500);
    });
})

module.exports = router;