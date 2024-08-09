var app = angular.module("myApp", []);
var API_PREFIX = "http://localhost:8080/api/";

app.controller("ProductController", function ($scope, $http) {
  $scope.products = [];

  $scope.getProducts = function () {
    $http
      .get(API_PREFIX + "products")
      .then(function (response) {
        $scope.products = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.getProducts();
});
