/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('Profile', ['$scope','$state','$http', ProfileCtrl]);

function ProfileCtrl($scope,$state,$http) {
// $scope.alerts = [{
//     type: 'success',
//     msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
// }, {
//     type: 'danger',
//     msg: 'Found a bug? Create an issue with as many details as you can.'
// }];
$scope.profile;
// $scope.getUser = function() {
    // $.get('http://localhost:6200/getuser/13054119-158',function(data){
        // console.log(data);
        // $scope.profile=data;
    // })
// };
$scope.getUser = function() {
    $http.get('http://localhost:6200/getuser/13054119-158')
    .then(function(res){
        console.log(res);
        $scope.profile=res.data;
    })
};
$scope.getUser();
$scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
};
}