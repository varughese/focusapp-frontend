angular.module('focusapp')

    .controller('main', ['$scope', '$rootScope', '$state', 'Goal', function($scope, $rootScope, $state, Goal) {
        $rootScope.user = $rootScope.user || {};

        $scope.getState = function() {
            return $state.current.name;
        };

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
            if (toState.name === "signup") return;

            // Auth.getUser()
            //     .then(function(data) {
            //         $rootScope.user = data.data;
			// 		var admin = data.data.admin;
            //         $rootScope.user.loggedIn = true;
            //         Object.defineProperty($rootScope.user, 'admin', {
            //             set: function() {
            //                 throw new Error('Sike you thought');
            //             },
            //             get: function() {
            //                 return admin;
            //             }
            //         });
            //     })
            //     .catch(function(err) {
            //         if (toState.name !== "login") $state.go('login');
            //     });

        });

		$rootScope.editGoal = function() {
			$state.go("editgoal");
		};

		$rootScope.history = function() {
			$state.go("historylist");
		};
		$rootScope.weeknum = getWeekNum();

		function getWeekNum() {
			var d = new Date();
			var dayNum = d.getUTCDay() || 7;
			d.setUTCDate(d.getUTCDate() + 4 - dayNum);
			var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
			return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
		}




    }]);
