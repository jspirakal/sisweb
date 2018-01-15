/**
 * Alerts Controller
 */

angular
.module('RDash')
.controller('News', ['$scope','$state','$http', NewsCtrl]);
function NewsCtrl($scope,$state,$http) {
$scope.sendNews = function() {
    console.log($scope.news);
    $http.post('http://localhost:6200/sendnews',$scope.n)
    .then(function(res){
        console.log(res);
        $('form')[0].reset();
                $('#sendnews_r').html('<div class="alert alert-success alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Success!</strong> News broadcasted succesfully!'+
  '</div>');
        // $scope.ap=res.data;
    },
    function(err){
                $('#sendnews_r').html('<div class="alert alert-danger alert-dismissable fade in">'+
    '<a  class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
    '<strong>Error!</strong> Try again!'+
  '</div>');
    });

};
$scope.getNews = function() {
    $http.get('http://localhost:6200/getnews')
    .then(function(res){
        console.log(res);
        $scope.news=res.data;
    });
};
$scope.getNews();
// $scope.viewReply=function(id){
//     $http.get('http://localhost:6200/getreply/'+id+'')
//     .then(function(res){
//         console.log(res);
//         $scope.reply=res.data;
//     })
// }

}
    