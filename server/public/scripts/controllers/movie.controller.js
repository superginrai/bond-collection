app.controller('MovieController', ['$http', 'MovieService', 'ActorService', function ($http, MovieService, ActorService, $mdDialog, $mdToast) {
    let self = this;
    self.movies = MovieService.movies;
    self.actors = ActorService.actors;

    self.newMovie = { title: '', actor_id: '', date: '', runtime: '', image_path: '' };

    self.getActors = function () {
        ActorService.getActors();
    };

    self.createMovie = function (newMovie) {
        MovieService.createMovie(newMovie);
        self.newMovie = { title: '', actor_id: '', date: '', runtime: '', image_path: '' };
    };

    self.deleteMovie = MovieService.deleteMovie;
}])