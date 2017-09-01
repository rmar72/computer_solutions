var csApp = angular.module('cs-app', ['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider.
    when('/main', {
        templateUrl: 'templates/main.html',
         controller: 'mainCtrl'
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
         controller: 'mainCtrl'
    }).
    when('/services', {
        templateUrl: 'templates/services.html',
         controller: 'servicesCtrl'
    }).
    when('/contact', {
        templateUrl: 'templates/contact.html',
         controller: 'contactCtrl'
    }).
    otherwise({redirectTo:'/main'});
})

.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.header = 'PC & Laptop Repair';
  $http.get('services.json').then((response) => $scope.services = response.data );
}])

.controller('servicesCtrl', ['$scope', '$http', function($scope, $http){
  $scope.diagnosticPrice = 'free';
  $http.get('services.json').then((response) => $scope.services = response.data );
}])

.controller('contactCtrl', ['$scope','$http', function($scope, $http){
  $scope.email = 'solsupport@cpsol.com';
  $http.get('locations.json').then((response) => $scope.locations = response.data );
}]);
