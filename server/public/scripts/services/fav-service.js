app.service('FavService', ['$http', function ($http, $mdDialog, $mdToast) {
    var self = this;

    self.favs = { data: '' };

    //Requests all "favorite" movies from the database via the server.
    self.getFavs = function () {
        $http({
            method: 'GET',
            url: '/favs'
        })
            .then(function (response) {
                console.log(response);
                self.favs.data = response.data;
            })
            .catch(function (error) {
                console.log('error on /favs GET', error);
            });
    }

    //Requests removal of "favorite" status on a movie in the database via the server.
    self.unFavMovie = function (movie) {
        alert('"No Mr. Bond, I expect you to die." Removed from favorites.')
        $http({
            method: 'PUT',
            url: '/favs',
            data: movie
        })
            .then(function (response) {
                self.getFavs();
            })
            .catch(function (error) {
                console.log('error on /movie POST', error);
            });
    }

}]);