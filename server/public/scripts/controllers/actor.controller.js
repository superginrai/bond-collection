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

    // self.showAlert = function() {
    //     console.log('Clicked!')
    //     $mdDialog.show(
    //         $mdDialog.alert()
    //         .parent(angular.element(document.querySelector('#popupContainer')))
    //         .title('Hi!!!')
    //         .textContent('You can say other things')
    //         .ariaLabel('Alert Dialog Demo')
    //         .ok('Got it!')
    //     )
    // }

    // self.showConfirm = function(ev) {
    //     // Appending dialog to document.body to cover sidenav in docs app
    //     var confirm = $mdDialog.confirm()
    //           .title('Would you like to delete your debt?')
    //           .textContent('All of the banks have agreed to forgive you your debts.')
    //           .ariaLabel('Lucky day')
    //           .targetEvent(ev)
    //           .ok('Please do it!')
    //           .cancel('Sounds like a scam');
    
    //     $mdDialog.show(confirm).then(function() {
    //       self.status = 'You decided to get rid of your debt.';
    //     }, function() {
    //       self.status = 'You decided to keep your debt.';
    //     });
    //   };

}])