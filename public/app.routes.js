angular.module('focusapp')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "templates/dashboard.html",
            controller: "dashboard"
        })
		.state("editgoal", {
            url: "/editgoal",
            templateUrl: "templates/goalofweek.html",
			controller: "goalEdit"
        })
		.state("landing", {
            url: "/landing",
            templateUrl: "templates/landing.html"
        });
}])


;
