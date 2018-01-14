/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('Application', ['$scope','$state','$http', ApplicationCtrl])
.controller('AdminApp',['$scope','$state','$http', AdminApp]);
function ApplicationCtrl($scope,$state,$http) {
$scope.sendApp = function() {
    if($scope.app.type==='general')
    {
    $scope.app.rollno=localStorage.getItem('rollno');
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
}

function AdminApp($scope,$state,$http) {
    $scope.sendApp = function() {
        if($scope.app.type==='general')
        {
        $scope.app.rollno=localStorage.getItem('rollno');
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
    $scope.getAllApp = function() {
        $http.get('http://localhost:6200/getallapplications')
        .then(function(res){
            console.log(res);
            $scope.ap=res.data;
        })
    };
    $scope.appReply=function (id) {
     $scope.selectedappid=id;
    }
    $scope.replyApp=function(id){
        $scope.reply.appid=id;
        $http.post('http://localhost:6200/replyapplication',$scope.reply)
        .then(function(res){
            console.log(res);
        },function(err){
            console.log(err);
        })
    }
    $scope.getAllApp();
    }
    