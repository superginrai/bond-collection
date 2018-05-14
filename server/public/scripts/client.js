let app = angular.module('BondApp', ['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: "HomeController as vm"
    })
        .when('/movie', {
            templateUrl: 'views/movie.html',
            controller: "MovieController as vm"
        })
        .when('/actor', {
            templateUrl: 'views/actor.html',
            controller: "ActorController as vm"
        })
        .when('/favs', {
            templateUrl: 'views/favs.html',
            controller: 'FavController as vm'
        })
        .otherwise({
            template: `<img ng-src="images/PigeonDoubleTake.gif">
            <h1>404</h1>`
        })

    $mdThemingProvider.theme('default')
        .dark();
});