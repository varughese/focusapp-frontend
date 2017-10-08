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
        Goal.update(goalID, $scope.goalData)
            .then(function() {
                // $state.go("dashboard");
            });
    };

    $scope.deleteEvent = function(){
        Goal.delete(goalID)
            .then(function() {
                // $state.go("dashboard");
            });

    };

}])


;
