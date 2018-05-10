app.controller('MovieController', ['$http', 'MovieService', function ($http, MovieService) {
    let self = this;
    self.movies = MovieService.movies;
    self.createMovie = MovieService.createMovie;
}])