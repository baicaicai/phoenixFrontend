"use strict";

coreCtrl.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.testFunction = function(){
		console.log('hello world');
	};
}
]);