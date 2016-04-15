/**
 * Created by chaojie.cai on 4/30/2015.
 */

angular.module('phoenix.config',[]).service('configServ',[function(){

	var avKey = {
		appId:"f7raj414xcmmh9dqvwgg1u6frclogxz1m1ih6xsat9y5tu6e",
		appKey:"avc6ma710tvbur5u7qkr69pxgomrg49t35rpdk01l7y95c0a"
	};

	var bluemix = {
		host:""
	};

	var config = {
		avKey:avKey,
		bluemix:bluemix
	};

	return config;

}]);
