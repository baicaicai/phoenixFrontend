var coreCtrl = angular.module('coreCtrl', []);

coreCtrl.controller('DashCtrl', function ($scope) {
})

coreCtrl.controller('ChatsCtrl', function ($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	}
})

coreCtrl.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

coreCtrl.controller('AccountCtrl', function ($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
