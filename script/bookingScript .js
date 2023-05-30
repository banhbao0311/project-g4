let app = angular.module("myApp", []);
app.controller("bookingCtrl", function ($scope) {
  $scope.total = 0;
  $scope.aldultQnt = 0;
  $scope.childQnt = 0;
  $scope.basicInit = function () {
    $scope.silverT = 0;
    $scope.goldT = 0;
    console.log($scope.aldultQnt + $scope.goldT);
  };
  $scope.silverInit = function () {
    $scope.silverT = 30;
    $scope.goldT = 0;
    console.log($scope.aldultQnt + $scope.goldT);
  };
  $scope.goldInit = function () {
    $scope.silverT = 0;
    $scope.goldT = 50;
    console.log($scope.aldultQnt + $scope.goldT);
  };

  // $scope.silverT = function(){
  //   // $scope.total = $scope.aldultQnt + $scope.childQnt + 30;
  //   document.getElementById("totalTicket").innerHTML = $scope.aldultQnt + $scope.childQnt + 30;
  // };
  // $scope.goldT = function(){
  //   $scope.total = $scope.aldultQnt + $scope.childQnt + 50;
  // };
});
