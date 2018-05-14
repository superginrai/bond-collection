app.controller('FavController', ['$http', 'FavService', 'MovieService', function ($http, FavService, MovieService, $mdDialog, $mdToast) {
    let self = this;

    self.favs = FavService.favs;
    self.getFavs = FavService.getFavs;
    self.deleteMovie = MovieService.deleteMovie;
    self.unFavMovie = FavService.unFavMovie;

    self.getFavs();
}]);