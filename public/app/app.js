var app = angular.module('app',[]);

app.config(function() {

});

app.run(function() {

});

app.controller('appController', ['$scope', function($scope) {

    $scope.removeFood = function(food) {
        var removeFood = $scope.foods.indexOf(food);
        $scope.foods.splice(removeFood, 1);
    }

    $scope.foods = [
        {
            name: "Peppermint",
            category: "Candy",
            rate: .5,
            available: true
        },
        {
            name: "Cheese Cake",
            category: "Cake",
            rate: 15,
            available: true
        },
        {
            name: "Sprite",
            category: "Drink",
            rate: 1,
            available: true
        },
        {
            name: "Chocolate Milk",
            category: "Milk",
            rate: 2.5,
            available: true
        }
    ];

}]);