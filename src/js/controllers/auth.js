/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('LoginCtrl', ['$scope','$http','$location','$state', LoginCtrl]);

function LoginCtrl($scope,$state,$http,$location) {
    $scope.login = function() {
        $.ajax({
        type: "POST",
        url: 'http://localhost:6200/login',
        dataType: 'JSON',
        data: $scope.user,
        success:function(res){
            if(res.user==='student'){
            localStorage.setItem('rollno',res.rollno); 
            localStorage.setItem('token',res.token);   
            localStorage.setItem('user',res.user);   
            window.location='/#!/user/home';
        }
          else{
              console.log(res);
            localStorage.setItem('rollno',res.rollno);
            localStorage.setItem('token',res.token);            
            localStorage.setItem('user',res.user);   
            window.location='/#!/admin/home';
        }
        },
        error:function(err){
             $('#login_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
                '<a href="" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                '<strong>Error!</strong> '+err.responseJSON+
            '</div>');
        }
        });
        //  $http({
        // method: "POST",
        // url: 'http://localhost:6200/login',
        // data: $scope.user,
        //  })
        //  .then(function(res){
        //      console.log(res);
        //  });
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