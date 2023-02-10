const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

//GET/:id route
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
    //grab user id from req.user
    const userId = req.user.id;
    //create an array of req.body values plus userIdto inject into the query
    const sqlValues = [req.body.name, req.body.age, 
                        req.body.foodDesc, req.body.cupsPerFeeding,
                        req.body.exerciseDesc, req.body.exerciseMin,
                        userId];
    //post new pet query                    
    const sqlQuery = `
    INSERT INTO "pets"
        ("name", "age", "food_desc", "cups_per_feeding",
        "exercise_desc", "exercise_min", "user_id")
    VALUES
        ($1, $2, $3, $4, $5, $6, $7);
    `;
    pool.query(sqlQuery, sqlValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Pet creation failed: ', err);
        res.sendStatus(500);
    });
});

//PUT by id route
router.put('/:id', (req, res) => {
    //get id of pet to update
    let idToEdit = req.params.id;
    //grab pet object
    let editPetObject = req.body;''
    //values to inject into query
    const sqlValues = [editPetObject.name, editPetObject.age, 
                    editPetObject.foodDesc, editPetObject.cupsPerFeeding,
                    editPetObject.exerciseDesc, editPetObject.exerciseMin, idToEdit];
    //put edit pet query
    const sqlQuery = `
    UPDATE "pets"
        SET 
            "name" = $1,
            "age" = $2,
            "food_desc" = $3,
            "cups_per_feeding" = $4,
            "exercise_desc" = $5,
            "exercise_min" = $6
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
router.delete('/:id', (req, res) => {
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