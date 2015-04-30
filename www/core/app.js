'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.controllers
// 'starter.controllers' is found in controllers.controllers
var app = angular.module('phoenix', [
	'ionic',
	'config',
	'starter.controllers',
	'starter.services',
	'LocalStorageModule'
	]);

app.run(function ($ionicPlatform,localStorageService,$state,configServ) {
	$ionicPlatform.ready(function () {

		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleLightContent();
		}
		console.log(configServ);
		//≥ı ºªØAV
		AV.initialize(configServ.avKey.appId, configServ.avKey.appKey);

		//check the auth status
		var currentUser = AV.User.current();
		if(currentUser){
			$state.go('tabs.dash');
		}else{
			$state.go('login');
		}

	});
});
app.config(function ($stateProvider, $urlRouterProvider) {

		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.controllers
		$stateProvider
		// setup an abstract state for the tabs directive
			.state('tab', {
				url: "/tab",
				abstract: true,
				controller:'MainCtrl',
				templateUrl: "core/views/main/tabs.html"
			})
			.state('tab.dash', {
				url: '/dash',
				views: {
					'tab-dash': {
						templateUrl: 'core/views/main/tab-dash.html',
						controller: 'DashCtrl'
					}
				}
			})
			.state('tab.chats', {
				url: '/chats',
				views: {
					'tab-chats': {
						templateUrl: 'core/views/main/tab-chats.html',
						controller: 'ChatsCtrl'
					}
				}
			})
			.state('tab.chat-detail', {
				url: '/chats/:chatId',
				views: {
					'tab-chats': {
						templateUrl: 'core/views/main/chat-detail.html',
						controller: 'ChatDetailCtrl'
					}
				}
			})
			.state('tab.account', {
				url: '/account',
				views: {
					'tab-account': {
						templateUrl: 'core/views/main/tab-account.html',
						controller: 'AccountCtrl'
					}
				}
			})
			.state('login', {
				url: '/login',
				templateUrl: 'core/views/auth/login.html',
				controller: 'LoginCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'core/views/auth/register.html',
				controller: 'RegCtrl'
			});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/dash');

	});



