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

  $scope.createProduct = function () {
    $http
      .post(API_PREFIX + "products", $scope.newProduct,{
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        $scope.getProducts();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.openDeleteModal = function (id) {
    $scope.deleteId = id;
    $("#deleteProductModal").modal("show");
  };

  $scope.deleteProduct = function () {
    $http
      .delete(API_PREFIX + "products/" + $scope.deleteId)
      .then(function (response) {
        $scope.getProducts();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.openEditProductModal = function (id) {
    $scope.editId = id;
    $("#editProductModal").modal("show");
  };

  $scope.editProduct = function () {
    $http
      .put(API_PREFIX + "products/" + $scope.editId, $scope.selectedProduct,{
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        $scope.getProducts();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});
