ctrlModule.controller('ConfigCtrl', ['$scope','$state','authServ', function ($scope,$state,authServ) {
    $scope.getFlights = function () {        
       authServ.getAllFlight().then(function success(data) {
           console.log(data);
       });
       
    };
    
    $scope.setCIACredential = function () {
        var currentUser = AV.User.current();
        var username= currentUser.getUsername();
        console.log(username);
        authServ.updateCredential(username).then(function success(data) {
           console.log(data);
        });
    };
}
]);