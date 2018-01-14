/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('Application', ['$scope','$state','$http', ApplicationCtrl]);
function ApplicationCtrl($scope,$state,$http) {
$scope.app={};
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
$scope.sendApp = function() {
    if($scope.app.type==='general')
    {

    $http.post('http://localhost:6200/sendapplication',$scope.app)
    .then(function(res){
        console.log(res);
                $('#sendapp_r').html('<div class="alert alert-success alert-dismissable fade in">'+
    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Success!</strong> Application submitted succesfully!'+
  '</div>');
        // $scope.ap=res.data;
    }),
    function(err){
                $('#sendapp_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Error!</strong> Try again!'+
  '</div>');
    }
    }
};

$scope.getApp = function() {
    $http.get('http://localhost:6200/getapplications/13054119-158')
    .then(function(res){
        console.log(res);
        $scope.ap=res.data;
    })
};
$scope.getApp();
$scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
};
}