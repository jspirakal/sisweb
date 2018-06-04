/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('Application', ['$scope','$state','$http', ApplicationCtrl])
.controller('AdminApp',['$scope','$state','$http', AdminApp])
.controller('Controller',['$scope','$state','$http', ControllerApp])
.controller('Hod',['$scope','$state','$http', HodApp])

.controller('Time', ['$scope','$state','$http', TCtrl]);
function TCtrl($scope,$state,$http) {

$scope.sendTimeTable = function() {
    var file=document.getElementById('timetable');
    file=file.files[0];
    var formData=new FormData();
    formData.append('timetable',file,file.name);
    formData.append('smester',$scope.tt.smester);
    formData.append('department',$scope.tt.department);
    console.log(formData);
    $http({
        url:'http://localhost:6200/sendtimetable',
        data:formData,
        // cache:true,
        method:'post',
        headers:{"Content-type":undefined}
    })
    .then(function(res){
        console.log(res);
                $('#sendtimetable_r').html('<div class="alert alert-success alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Success!</strong> TimeTable submitted succesfully!'+
  '</div>');
        // $scope.ap=res.data;
    },
    function(err){
                $('#sendtimetable_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Error!</strong> Try again!'+
  '</div>');
    });
};
$scope.getAllTT = function() {
    $http.get('http://localhost:6200/getalltt')
    .then(function(res){
        console.log(res);
        $scope.timetable=res.data;
    })
};
    $scope.getAllTT();
};
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
$scope.getApp = function(id) {
    $http.get('http://localhost:6200/getapplications/'+localStorage.getItem('rollno')+'')
    .then(function(res){
        console.log(res);
        $scope.ap=res.data;
    })
};
$scope.getApp();
$scope.viewAdminReply=function(id){
    $http.get('http://localhost:6200/getadminreply/'+id+'')
    .then(function(res){
        console.log(res);
        $scope.reply=res.data;
    })
}
$scope.viewControllerReply=function(id){
    $http.get('http://localhost:6200/getcontrollerreply/'+id+'')
    .then(function(res){
        console.log(res);
        $scope.reply=res.data;
    })
}
$scope.viewHodReply=function(id){
    $http.get('http://localhost:6200/gethodreply/'+id+'')
    .then(function(res){
        console.log(res);
        $scope.reply=res.data;
    })
}
$scope.viewFinalReply=function(id){
    $http.get('http://localhost:6200/getfinalreply/'+id+'')
    .then(function(res){
        console.log(res);
        $scope.reply=res.data;
    })
}
}

function AdminApp($scope,$state,$http) {
    $scope.reply={

    };
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
    $scope.seachForAdmin= function (rn) {
        $http.get('http://localhost:6200/getapplicationbyrollno/admin/'+rn+'')
        .then(function(res){
            console.log(res);
            $scope.ap=res.data;
        })
    }
    $scope.appReply=function (id,rt) {
     $scope.selectedappid=id;
     $scope.reply.replyType= rt;     
    }

    $scope.replyApp=function(id){
        // $scope.reply.appid=id;
        console.log($scope.reply)
        $http.post('http://localhost:6200/replyapplicationbyadmin/'+id+'',$scope.reply)
        .then(function(res){
            $scope.getAllApp();
            $('form')[0].reset();            
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
    $scope.refreshApplications=function(){
        $scope.searchrollno='';
        $scope.getAllApp();    
    }
    }
    function ControllerApp($scope,$state,$http) {
        $scope.reply={

        };
        $scope.seachForController= function (rn) {
            $http.get('http://localhost:6200/getapplicationbyrollno/controller/'+rn+'')
            .then(function(res){
                console.log(res);
                $scope.ap=res.data;
            })
        }
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
            $http.get('http://localhost:6200/getallapplicationsbycontroller')
            .then(function(res){
                console.log(res);
                $scope.ap=res.data;
            })
        };
        $scope.appReply=function (id,rt) {
         $scope.selectedappid=id;
         $scope.reply.replyType= rt;
        }
        $scope.replyApp=function(id){
            $http.post('http://localhost:6200/replyapplicationbycontroller/'+id+'',$scope.reply)
            .then(function(res){
                $scope.getAllApp();  
            $('form')[0].reset();                        
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
        $scope.refreshApplications=function(){
            $scope.searchrollno='';
            $scope.getAllApp();    
        }
        }
        
        function HodApp($scope,$state,$http) {
            $scope.reply={

            };
            $scope.seachForHod= function (rn) {
                $http.get('http://localhost:6200/getapplicationbyrollno/hod/'+rn+'')
                .then(function(res){
                    console.log(res);
                    $scope.ap=res.data;
                })
            }
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
                $http.get('http://localhost:6200/getallapplicationsbyhod')
                .then(function(res){
                    console.log(res);
                    $scope.ap=res.data;
                })
            };
            $scope.appReply=function (id,rt) {
                $scope.selectedappid=id;
                $scope.reply.replyType= rt;         
            }
            $scope.replyApp=function(id){
                $http.post('http://localhost:6200/replyapplicationbyhod/'+id+'',$scope.reply)
                .then(function(res){
                    $scope.getAllApp();
                    $('form')[0].reset();                        
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
            $scope.refreshApplications=function(){
                $scope.searchrollno='';
                $scope.getAllApp();    
            }
            }
            