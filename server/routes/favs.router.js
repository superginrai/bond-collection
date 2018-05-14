const router = require('express').Router();
const pool = require('../modules/pool');

//Finds all "favorite" movie documents from the database and sends them client-side for DOM display.
router.get('/', (req, res) => {
    console.log('GET /favs');
    pool.query(`SELECT "movie"."id", "movie"."title", "actor"."name", "movie"."date", "movie"."runtime", "movie"."image_path" FROM "movie"
    JOIN "actor" ON "movie"."actor_id" = "actor"."id"
    WHERE "favorite" = TRUE
    ORDER BY "movie"."id";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('SQL GET error', error);
            res.sendStatus(500);
        });
});

//Removes "favorite" status from a movie document.
router.put('/', (req, res) => {
    const movie = req.body.id;
    console.log(movie);
    pool.query(`UPDATE "movie"
    SET "favorite" = FALSE
    WHERE "id" = $1;`, [movie])
        .then((results) => {
            res.sendStatus(200);
        });
});

module.exports = router;