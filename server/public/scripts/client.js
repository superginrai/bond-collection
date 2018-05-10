let app = angular.module('BondApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>Pay Attention 007</h1>'
    })
        .when('/movie', {
            templateUrl: 'views/movie.html',
            controller: "MovieController as vm"
        })
        .when('/actor', {
            templateUrl: 'views/actor.html',
            controller: "ActorController as vm"
        })
        .otherwise({
            template: `<img ng-src="images/PigeonDoubleTake.gif">
            <h1>404</h1>`
        })
})