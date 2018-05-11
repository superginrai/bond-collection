app.controller('MovieController', ['$http', 'MovieService', 'ActorService', function ($http, MovieService, ActorService) {
    let self = this;
    self.movies = MovieService.movies;
    self.actors = ActorService.actors;
    self.createMovie = MovieService.createMovie;
    self.deleteMovie = MovieService.deleteMovie;
}])