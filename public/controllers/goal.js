angular.module('focusapp')

// .controller('goalCreate', ['$scope', "$state", "$rootScope", "Goal", function($scope, $state, $rootScope, Goal){
// 	$scope.goalData = {} || $scope.goalData;
//
// 	$scope.goalData.timestamp = Date.now();
//
// 	$scope.saveGoal = function(){
//         Goal.create($scope.goalData)
//             .then(function() {
//                 $state.go("dashboard");
//             });
//     };
//
// }])

.controller('goalEdit', ['$scope', "$state", "$rootScope", '$stateParams', 'Goal', function($scope, $state, $rootScope, $stateParams, Goal){

	$scope.goaljawn = $rootScope.currentGoal;
	var goalID = $scope.goaljawn._id;

    $scope.update = function(){
		var p;
		if(goalID) {
			p = Goal.update(goalID, $scope.goaljawn);
		} else {
			p = Goal.create($scope.goaljawn);
		}
		p.then(function() {
			$state.go("dashboard");
		});
    };

    $scope.deleteEvent = function(){
        Goal.delete(goalID)
            .then(function() {
                // $state.go("dashboard");
            });

    };

}])


.controller('goalHistory', ['$scope', "$state", "$rootScope", '$stateParams', 'Goal', function($scope, $state, $rootScope, $stateParams, Goal){

	$scope.goals = $rootScope.goals;

	if(!$scope.goals) {
		Goal.all()
			.then(function(goals) {
				console.log(goals);
				$scope.goals = goals.goals;
			});
	}
}])


;
