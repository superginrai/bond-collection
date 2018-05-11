const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /actors');
    pool.query(`SELECT * FROM "actor";`)
        .then((results) => {
            res.send(results.rows);
            console.log(results.rows);
        })
        .catch((error) => {
            console.log('SQL GET error', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const actor = req.body;
    pool.query(`INSERT INTO "actor" ("name")
    VALUES ($1);`, [actor.name])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('SQL POST error:', error);
            res.sendStatus(500);
        });
});

module.exports = router;