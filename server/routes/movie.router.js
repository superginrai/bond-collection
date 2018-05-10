const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /movies');
    pool.query(`SELECT * FROM "movie";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('SQL GET error', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const movie = req.body;
    pool.query(`INSERT INTO "movie" ("name", "actor", "date", "runtime", "image_path")
    VALUES ($1, $2, $3, $4, $5);`, [movie.name, movie.actor, movie.date, movie.runtime, movie.image_path])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('SQL POST error:', error);
            res.sendStatus(500);
        });
});

module.exports = router;