app.service('MovieService', ['$http', function ($http, $mdDialog, $mdToast) {
    var self = this;

    self.movies = { data: '' };

    self.newMovie = { title: '', actor_id: '', date: '', runtime: '', image_path: '' };

    //Requests all Bond movies from the database via the server.
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

    //Creates a new Bond movie object and requests a post to the database via the server.
    self.createMovie = function (newMovie) {
        console.log('Make this movie:', newMovie);
        $http({
            method: 'POST',
            url: '/movies',
            data: newMovie
        })
            .then(function (response) {
                console.log('You created a new Bond movie!', response);
                self.newMovie = { title: '', actor_id: '', date: '', runtime: '', image_path: '' };
                self.getMovies();
                self.getActors();
            })
            .catch(function (error) {
                console.log('error on /movie POST', error);
            });
    }

    //Requests movie deletion from the database through the server if you confirm.
    self.deleteMovie = function (movieId) {
        console.log(movieId);
        if (confirm('Are you sure you want to delete thie movie forever (forever...forever...)?')) {
            $http({
                method: 'DELETE',
                url: `/movies/${movieId}`
            })
                .then(function (response) {
                    console.log(response);
                    self.getMovies();
                    self.getActors();
                })
                .catch(function (error) {
                    console.log('error on movie DELETE', error);
                });
        } else {
            console.log('do NOT delete');
        }
    }

    //Requests addition of movie to favorites list.
    self.favMovie = function (movie) {
        console.log('Fav this movie:', movie);
        alert("You're an All Time High! Added to Favorites!")
        $http({
            method: 'PUT',
            url: '/movies',
            data: movie
        })
            .then(function (response) {
                console.log('You favorited this movie:', response);
                self.getMovies();
                self.getActors();
            })
            .catch(function (error) {
                console.log('error on /movie POST', error);
            });
    }

}]);