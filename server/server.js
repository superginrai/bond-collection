const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const movieRouter = require('./routes/movie.router');
const actorRouter = require('./routes/actor.router');
const favRouter = require('./routes/favs.router');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/movies', movieRouter);
app.use('/actors', actorRouter);
app.use('/favs', favRouter);

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
});