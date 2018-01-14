/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('Application', ['$scope','$state','$http', ApplicationCtrl])
.controller('AdminApp',['$scope','$state','$http', AdminApp]);
function ApplicationCtrl($scope,$state,$http) {
$scope.sendApp = function() {
    console.log($scope.app);
    $scope.app.rollno=localStorage.getItem('rollno');
    $http.post('http://localhost:6200/sendapplication',$scope.app)
    .then(function(res){
        console.log(res);
                $('#sendapp_r').html('<div class="alert alert-success alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Success!</strong> Application submitted succesfully!'+
  '</div>');
        // $scope.ap=res.data;
    },
    function(err){
                $('#sendapp_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Error!</strong> Try again!'+
  '</div>');
    });

};
$scope.getApp = function() {
    $http.get('http://localhost:6200/getapplications/13054119-158')
    .then(function(res){
        console.log(res);
        $scope.ap=res.data;
    })
};
$scope.getApp();
$scope.viewReply=function(id){
    $http.get('http://localhost:6200/getreply/'+id+'')
    .then(function(res){
        console.log(res);
        $scope.reply=res.data;
    })
}

}

function AdminApp($scope,$state,$http) {
    $scope.sendApp = function() {
        if($scope.app.type==='general')
        {
        $scope.app.rollno=localStorage.getItem('rollno');
        $http.post('http://localhost:6200/sendapplication',$scope.app)
        .then(function(res){
                    $('#sendapp_r').html('<div class="alert alert-success alert-dismissable fade in">'+
        '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
        '<strong>Success!</strong> Application submitted succesfully!'+
      '</div>');
            // $scope.ap=res.data;
        }),
        function(err){
                    $('#sendapp_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
        '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
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
            $('#replyapp_r').html('<div class="alert alert-success alert-dismissable fade in">'+
            '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
            '<strong>Success!</strong> Application replied succesfully!'+
          '</div>');
        },function(err){
            $('#sendapp_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
            '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
            '<strong>Error!</strong> Try again!'+
          '</div>');
        })
    }
    $scope.getAllApp();
    }
    