var myNameSpace = angular.module('MyApp', []);

myNameSpace.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'Joe Smith',
    'title' : 'Book Author',
    'company' : 'Acme Books'
  }
});
