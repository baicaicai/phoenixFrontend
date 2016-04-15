/**
 * Created by chaojie.cai on 4/30/2015.
 */


ctrlModule.controller('AuthCtrl', ['$scope','$state', 'authServ', function ($scope,$state,authServ) {
	$scope.inputs = {
        phone:"",
		verifyCode:"",
        password:"",
		username:""
	};

	$scope.registerUser = function(){
		console.log($scope.inputs);
		var user = new AV.User();
		user.set("username", $scope.inputs.username);
		user.set("password", $scope.inputs.password);
		//user.set("email", $scope.user.email);
		//user.set("mobilePhoneNumber", $scope.inputs.phone);

		user.signUp(null, {
			success: function(user) {
				console.log('register sucessed');
                if (!user.configStatus){
                    $state.go('tab.account');
                }
                else{
                    $state.go('tab.dash');
                }

			},
			error: function(user, error) {
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
			}
		});
	};

	// 用户获取验证码的方法
    $scope.getVerifyCode= function () {

	    var re= /^(13[0-9]{9})|(15[89][0-9]{8})$/;

	    if(!re.test($scope.inputs.phone)){
		    //ADD 提示框高速用户需要填写正确的电话号码
		    console.log("Please enter correct Phone Number");
	    }
	    else{

		    authServ.getVerifyCode($scope.inputs.phone).then(function (verifyCode) {
		    $scope.inputs.verifyCode = verifyCode;
			console.log("Verify code has been sent to your phone");
		    });
	    }

    };

	// 用户通过电话注册或登录的方法
    $scope.signUpOrlogInWithMobilePhone = function(){
	    if(!$scope.inputs.phone || !$scope.inputs.verifyCode){
		    alert("请先获取验证码");//ADD prompt to let user get verify code first
	    }
	    else{
		    authServ.signUpOrlogInWithMobilePhone($scope.inputs.phone,$scope.inputs.verifyCode).then(function(user) {
			    //注册或者登录成功
			    console.log('Sucessfully logged in');
			    if (!user.configStatus){
				    $state.go('tab.account');
			    }
			    else{
				    $state.go('tab.dash');
			    }
		    }, function(error) {
			    // 失败
			    alert(error.message);
			    // The login failed. Check error to see why.
		    });
	    }
    };

	// 传统登录方法
    $scope.login = function(){
        if(!$scope.inputs.username && !$scope.inputs.password){   //此处应该验证用户是否正确输入了用户名及密码
			alert("Please enter the username or password");
        }
	    else{
	        console.log($scope.inputs);
	        authServ.login($scope.inputs.username,$scope.inputs.password).then(function (result) {
		        console.log(result + '/nSucessfully logged in');
		        if (!result.configStatus){
			        $state.go('tab.account');
		        }
		        else{
			        $state.go('tab.dash');
		        }
		        // Do stuff after successful login
	        });
        }
	};
	
	$scope.logout= function () {
		authServ.logout();
	}
}
]);