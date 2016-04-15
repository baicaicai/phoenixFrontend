/**
 * Created by chaojie.cai on 4/29/2015.
 */

coreServ.service('authServ',['$rootScope','$q',function($rootScope,$q){

	this.getAllFlight = function (){
        var deferred = $q.defer();
        var promise = deferred.promise;
        var query = new AV.Query('Flight');
        query.equalTo('Cid', '0000058908');
        query.find().then(function(results) {
            console.log(results);
            deferred.resolve(results);
            console.log('Successfully retrieved ' + results.length + ' posts.');
            // 处理返回的结果数据   
        }, function(error) {
            deferred.reject(error);
            console.log('Error: ' + error.code + ' ' + error.message);
        });
        return promise;             
    }; 
    
    this.updateCredential =function (username) {
        console.log(username);
        var defer = $q.defer();
        var promise = defer.promise;

        var query =new AV.Query('_User');
        query.equalTo('username',username);
        query.find().then(function (users) {
            console.log(users);
            var user = users[0];
            console.log(user);
            user.set('username_CIA',"0000058908");
            user.set('password_CIA',"0503");
            user.set('configStatus',true);
            defer.resolve(user.save());
        },function (error) {
            console.log(error);
            defer.reject(error);

        });
        return promise;

    }

    this.registerWithWechat = function(){
        // 后续补充相应的方法
    }
    
    this.login = function (username, password) {
        var defer = $q.defer();
        AV.User.logIn(username, password, {
            success: function(user) {
                defer.resolve(user);
            },
            error: function(user, error) {
                defer.reject(error);
            }
        });
        return defer.promise;
    };
	
	this.logout = function () {

		AV.User.logOut();
		var currentUser = AV.User.current();
	};
    
    this.signUpOrlogInWithMobilePhone = function (mobileNumber, verifyCode) {
        var defer = $q.defer();
        var user = new AV.User();
        user.signUpOrlogInWithMobilePhone({
            mobilePhoneNumber: mobileNumber,
            smsCode: verifyCode
        }).then(function(user) {
            //注册或者登录成功
            defer.resolve(user);
        }, function(error) {
            // 失败
            defer.reject(error);
            // The login failed. Check error to see why.
        });
        return defer.promise;
    }

    this.getVerifyCode = function (mobileNumber) {
        var defer = $q.defer();

            AV.Cloud.requestSmsCode(mobileNumber).then(function(verifyCode) {
                defer.resolve(verifyCode);
                console.log('Sucessful send the verify code' + verifyCode);
                //发送成功
            }, function(error) {
                //发送失败
                defer.reject(error);
                console.log(error);
            });
        return defer.promise;
    }
}]);