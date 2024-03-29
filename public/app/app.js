var app = angular.module('app',['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'appController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'appController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

app.directive('randomFood', [function() {

    return {
        restrict: 'E',
        scope:  {
            foods: '=',
            title: '=',
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        },
    };

}]);

app.controller('appController', ['$scope', '$http', function($scope, $http) {

    $scope.removeAll = function() {
        $scope.foods = [];
    }

    $scope.addFood = function() {
        $scope.foods.push({
            name: $scope.newFood.name,
            category: $scope.newFood.category,
            rate: parseInt($scope.newFood.rate),
            available: true
        });

        $scope.newFood.name = "";
        $scope.newFood.category = "";
        $scope.newFood.rate = "";
    };

    $scope.removeFood = function(food) {
        var removeFood = $scope.foods.indexOf(food);
        $scope.foods.splice(removeFood, 1);
    };

    $http.get('data/foods.json').then(function(response) {
        $scope.foods = response.data;
    });



}]);

app.controller('contactController', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
        $location.path('/contact-success');
    }
}])