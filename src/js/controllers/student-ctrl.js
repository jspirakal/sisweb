/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('Student', ['$scope','$state','$http', ProfileCtrl]);

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
    if(localStorage.getItem('rollno')=='admin')
    {
    $http.get('http://localhost:6200/getalluser')
    .then(function(res){
        console.log(res);
        $scope.students=res.data;
    })
    } else {
    $http({
        url:'http://localhost:6200/getuser/'+localStorage.getItem('rollno'),
        method:'get',
        headers: {
            'Authorization':'Baerer '+localStorage.getItem('token')
          }
        })
    // }).get('http://localhost:6200/getuser/'+localStorage.getItem('rollno')+'')
    .then(function(res){
        console.log(res);
        $scope.profile=res.data;
    })
    }
};
$scope.getUser();
$scope.registerStudent=function(){
    $http.post('http://localhost:6200/register',$scope.n)
    .then(function(res){
        console.log(res);
        $('form')[0].reset();
                $('#registerstudent_r').html('<div class="alert alert-success alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Success!</strong> New Student registerd Succesfully!'+
  '</div>');
        // $scope.ap=res.data;
    },
    function(err){
                $('#registerstudent_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Error!</strong> Try again!'+
  '</div>');
    });
}
$scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
};
}