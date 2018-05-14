app.controller('HomeController', ['$http', 'HomeService', function ($http, HomeService, $mdDialog, $mdToast) {
    console.log('mi6 briefing');
    let self = this;

    let today = new Date();
    let hourNow = today.getHours();
    self.greeting = '';

    if (hourNow > 18) {
        self.greeting = 'Good Evening';
    } else if (hourNow > 12) {
        self.greeting = 'Good Afternoon';
    } else if (hourNow > 0) {
        self.greeting = 'Good Morning';
    } else {
        self.greeting = 'Greetings';
    }

}]);