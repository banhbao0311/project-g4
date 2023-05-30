var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            // templateUrl : "main.htm"
        })
        .when("/gallery", {
            templateUrl: "2_gallery.html"
        })
        .when("/event", {
            templateUrl: "3_event.html"
        })
        .when("/booking", {
            templateUrl: "4_booking.html"
        })
        .when("/map", {
            templateUrl: "5_map.html"
        })
        .when("/contact", {
            templateUrl: "6_contact.html"
        })
        .when("/feedback", {
          templateUrl: "8_feedback.html"
        });
});
// let app = angular.module("myApp", []);
app.controller("bookingCtrl", function ($scope) {

});
app.controller("indexCtrl", function ($scope) {
    setInterval(function(){
        $scope.now = new Date();
        console.log($scope.now);
        document.getElementById("timing").innerHTML = $scope.now;
    },1000);
});
app.controller("fbCtrl", function ($scope) {
  
});
