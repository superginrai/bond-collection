app.controller('ActorController', ['$http', 'ActorService', 'MovieService', function ($http, ActorService, MovieService, $mdDialog, $mdToast) {
    let self = this;
    self.actors = ActorService.actors;
    //  self.movies = MovieService.movies;
    self.addActor = ActorService.addActor;
    //self.retireActor = ActorService.retireActor;
    self.getActors = ActorService.getActors;
    self.getMovies = MovieService.getMovies;

    self.getActors();
    self.getMovies();

    self.retireActor = function (actor) {
        if (actor.count > 0) {
            alert(`You can't retire a Bond that still has movies!`);
        } else {
            ActorService.retireActor(actor.id);
        }
    }

}])