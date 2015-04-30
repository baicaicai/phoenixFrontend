/**
 * Created by chaojie.cai on 4/30/2015.
 */
/**
 * Created by chaojie.cai on 4/30/2015.
 */


app.controller('LoginCtrl', ['$scope', function ($scope) {

	$scope.user = {
		username:"",
		password:""
	};

	$scope.login = function(){

		AV.User.logIn($scope.user.username, $scope.user.password, {
			success: function(user) {
				console.log('≥…π¶µ«»Î');
				// Do stuff after successful login.
			},
			error: function(user, error) {
				alert(error.message);
				// The login failed. Check error to see why.
			}
		});
	};

}
]);