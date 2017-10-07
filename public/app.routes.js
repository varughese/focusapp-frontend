angular.module('focusapp')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "templates/dashboard.html",
            controller: "dashboard"
        })
        .state("event", {
            url: "/event",
            template: "<div ui-view></div>",
            abstract: true
        })
        .state("event.create", {
            url: "/create",
            templateUrl: "templates/event.html",
            controller: "eventCreate"
        })
        .state("event.edit", {
            url: "/edit/:eventID",
            templateUrl: "templates/event.html",
            controller: "eventEdit"
        })
        ;
}])


;
