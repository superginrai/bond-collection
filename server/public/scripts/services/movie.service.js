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
                self.getMovies();
            })
            .catch(function (error) {
                console.log('error on /movie POST', error);
            });
    }

    self.deleteMovie = function (movieToDelete) {
        if (confirm('Are you sure you want to delete?')) {
            $http({
                method: 'DELETE',
                url: '/movies',
                params: movieToDelete
            })
                .then(function (response) {
                    console.log(response);
                    self.getMovies();
                })
                .catch(function (error) {
                    console.log('error on movie DELETE', error);
                });
        } else {
            console.log('do NOT delete');
        }
    }

    self.getMovies();

}]);