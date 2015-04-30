/**
 * Created by chaojie.cai on 4/29/2015.
 */

angular.module('core.service',['ngStorage']).service('authServ',['$rootScope',function($rootScope){

	$rootScope.currentUser;
}]);