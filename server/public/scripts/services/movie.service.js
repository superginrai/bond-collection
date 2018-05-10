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

    self.createMovie = function (newMovie) {
        console.log('Make this movie:', newMovie);
        $http({
            method: 'POST',
            url: '/movies',
            data: newMovie
        })
            .then(function (response) {
                console.log('You created a new Bond movie!', response);
            })
            .catch(function (error) {
                console.log('error on /movie POST', error);
            });
    }


    self.getMovies();

}]);