angular.module('focusapp')

.controller('dashboard', ['$scope', "$state", "$rootScope", "Goal", "$timeout", "$sce", function($scope, $state, $rootScope, Goal, $timeout, $sce){
    $scope.goals = [];

			Goal.all()
				.then(function(goals) {
					console.log(goals);
					$rootScope.goals = goals.goals;
					$rootScope.currentGoal = $rootScope.goals[0];
					if($rootScope.weeknum > $rootScope.currentGoal.week) {
						$rootScope.currentGoal = {
							week: $rootScope.weeknum
						};
						$state.go("editgoal");
					}
				});

    // UpcomingEvent.all()
    //     .then(function(upcoming) {
    //         var today = new Date().setDate(new Date().getDate() - 1);
    //         for(var i=0; i<upcoming.length; i++) {
    //             var u = upcoming[i],
    //                 desc = u.description;
	//
    //             if(desc) {
    //                 var http = desc.toLowerCase().indexOf("http");
	//
    //                 if(http > -1) {
    //                     var hrefText = "Link",
    //                         newLine = desc.indexOf("\n", http),
    //                         space = desc.indexOf(" ", http);
	//
    //                     if(newLine > 0 && newLine < space) space = newLine;
	//
	//
    //                     if(space < 0) {
    //                         space = desc.length;
    //                     }
	//
    //                     var html = "<a target=\"_blank\" href=\"" + desc.substring(http, space) + "\">Link</a>";
    //                     desc = desc.substring(0, http) + html + desc.substring(space);
    //                 }
	//
    //             }
    //             u.htmlDescription = $sce.trustAsHtml(desc);
	//
    //             u.eventOver = new Date(u.date) <= today;
    //         }
    //         $rootScope.upcoming = upcoming;
    //     });

}])

;
