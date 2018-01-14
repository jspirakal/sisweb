/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('LoginCtrl', ['$scope','$http','$state', LoginCtrl]);

function LoginCtrl($scope,$state,$http,Service) {
    // $scope.alerts = [{
    //     type: 'success',
    //     msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
    // }, {
    //     type: 'danger',
    //     msg: 'Found a bug? Create an issue with as many details as you can.'
    // }];

    $scope.login = function() {
        alert();
        $http.post('http://localhost:6200/login',$scope.user)
        .then(function(res){
            console.log(res);
            // $state.go('user.home');
        });
//         $http({
//   method: 'GET',
//   url: '/someUrl'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });
        // Service.isAuthentic();
    //   a.then(function(d)console.log(d));

    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}