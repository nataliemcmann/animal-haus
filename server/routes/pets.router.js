const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const userId = req.user.id;
    const sqlValues = [req.body.name, req.body.age, 
                        req.body.foodDesc, req.body.cupsPerFeeding,
                        req.body.exerciseDesc, req.body.exerciseMin,
                        userId];
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

module.exports = router;