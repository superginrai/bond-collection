const router = require('express').Router();
const pool = require('../modules/pool');

//Gets all movie documents from the database and sends them client-side for display on the DOM.
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

//Inserts a new actor document into the database via SQL.
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

//Deletes a movie document from the database byt id# as requested by the user.
router.delete('/:id', (req, res) => {
    const movie = req.params.id;
    console.log(movie);
    pool.query('DELETE FROM "movie" WHERE "id" = $1;', [movie])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('DELETE movie error', error);
            res.sendStatus(500);
        });
});

//Sets a movie document to "favorite" in the database as requested by the user.
router.put('/', (req, res) => {
    const movie = req.body.id;
    console.log(movie);
    pool.query(`UPDATE "movie"
    SET "favorite" = TRUE
    WHERE "id" = $1;`, [movie])
        .then((results) => {
            res.sendStatus(200);
        });
});

module.exports = router;