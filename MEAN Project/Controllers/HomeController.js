app.controller('HomeController',function ($scope, $http) {
    $scope.products=[];
    function GetDetails() {
       $http.get('/products')
           .then(function (response) {
               $scope.products=response.data;
           })
   }
   GetDetails();

   $scope.RegisterProduct=function (product) {
       $http.post('/addProduct',product);
       alert('Record Inserted');
       GetDetails();
   }

})