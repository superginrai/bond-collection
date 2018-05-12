app.controller('ActorController', ['$http', 'ActorService', 'MovieService', function ($http, ActorService, MovieService, $mdDialog, $mdToast) {
    let self = this;
    self.actors = ActorService.actors;
    
    self.getActors = ActorService.getActors;
    self.getMovies = MovieService.getMovies;

    self.getActors();
    self.getMovies();

    self.addActor = function (newActor) {
        ActorService.addActor(newActor);
        self.newActor = { name: '' };
    };

    self.retireActor = function (actor) {
        if (actor.count > 0) {
            alert(`You can't retire a Bond that still has movies!`);
        } else {
            ActorService.retireActor(actor.id);
        }
    }

}])