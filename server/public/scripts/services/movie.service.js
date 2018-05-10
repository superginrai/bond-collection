app.service('MovieService', ['$http', function ($http) {
    var self = this;

    self.movies = { data: '' };

    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movies'
        })
            .then(function (response) {
                console.log(response);
                self.movies.data = response.data;
            })
            .catch(function (error) {
                console.log('error on /movies GET', error);
            });
    }

    self.getMovies();

}])