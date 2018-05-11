app.service('ActorService', ['$http', function ($http) {
    var self = this;

    self.actors = { data: '' };

    self.newActor = { name: ''};

    self.getActors = function () {
        $http({
            method: 'GET',
            url: '/actors'
        })
            .then(function (response) {
                console.log(response);
                self.actors.data = response.data;
            })
            .catch(function (error) {
                console.log('error on /actors GET', error);
            });
    }

    self.addActor = function (newActor) {
        console.log('Add this Bond actor:', newActor);
        $http({
            method: 'POST',
            url: '/actors',
            data: newActor
        })
            .then(function (response) {
                console.log('You added a new Bond actor!', response);
                self.getActors();
            })
            .catch(function (error) {
                console.log('error on /actors POST', error);
            });
    }

    self.retireActor = function (actorId) {
        console.log('retire actor', actorId);
        $http({
            method: 'DELETE',
            url: `/actors/${actorId}`
        }).then((response) => {
            self.getActors();
        }).catch((error) => {
            console.log('error on /actors DELETE', error);
        })
    }

    self.getActors();

}]);