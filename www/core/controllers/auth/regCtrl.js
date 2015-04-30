/**
 * Created by chaojie.cai on 4/30/2015.
 */


app.controller('RegCtrl', ['$scope', function ($scope) {

	$scope.user = {
		username:"",
		password:"",
		email:"",
		phone:""
	};

	$scope.registerUser = function(){
		console.log($scope.user);
		var user = new AV.User();
		user.set("username", $scope.user.username);
		user.set("password", $scope.user.password);
		user.set("email", $scope.user.email);
		user.set("mobilePhoneNumber", $scope.user.phone);

		user.signUp(null, {
			success: function(user) {
				console.log('register sucessed');
				// Hooray! Let them use the app now.
			},
			error: function(user, error) {
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
			}
		});
	};

}
]);