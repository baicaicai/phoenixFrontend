"use strict";

var ctrlModule = angular.module('phoenix.controllers', []);

ctrlModule.controller('TabCtrl', function($scope){
    
})

ctrlModule.controller('DashCtrl', function($scope) {
})

ctrlModule.controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	}
})

ctrlModule.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

ctrlModule.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});

ctrlModule.controller('MainCtrl', ['$scope', function($scope) {
	$scope.testFunction = function(){
		console.log('hello world');
	};
}
]);
