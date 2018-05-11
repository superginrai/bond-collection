const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /movies');
    pool.query(`SELECT "movie"."id", "movie"."title", "actor"."name", "movie"."date", "movie"."runtime", "movie"."image_path" FROM "movie"
    JOIN "actor" ON "movie"."actor_id" = "actor"."id"
    ORDER BY "movie"."id";`)
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
    console.log(movie);
    pool.query(`INSERT INTO "movie" ("title", "actor_id", "date", "runtime", "image_path")
    VALUES ($1, $2, $3, $4, $5);`, [movie.title, movie.actor_id, movie.date, movie.runtime, movie.image_path])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('SQL POST error:', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const movie = req.params.id;
    console.log(movie);
    pool.query('DELETE FROM "movie" WHERE "id" = $1;', [movie])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('DELETE movie error', error);
            res.sendStatus(500);
        });
});

module.exports = router;