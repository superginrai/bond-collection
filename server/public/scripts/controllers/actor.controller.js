app.controller('ActorController', ['$http', 'ActorService', function ($http, ActorService) {
    let self = this;
    self.actors = ActorService.actors;
  //  self.movies = MovieService.movies;
    self.addActor = ActorService.addActor;
}])