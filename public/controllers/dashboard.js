angular.module('focusapp')

.controller('dashboard', ['$scope', "$state", "$rootScope", "Goal", "$timeout", "$sce", function($scope, $state, $rootScope, Goal, $timeout, $sce){
    $scope.goals = [];
	$rootScope.weeknum = getWeekNum();

	function getWeekNum() {
		var d = new Date();
		var dayNum = d.getUTCDay() || 7;
		d.setUTCDate(d.getUTCDate() + 4 - dayNum);
		var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
		return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
	}


    Goal.all()
        .then(function(goals) {
			console.log(goals);
			$scope.goals = goals.goals;
			$scope.currentGoal = $scope.goals[0];
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
