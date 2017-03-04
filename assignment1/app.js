(function() {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', MsgController);

    MsgController.$inject = ['$scope'];
    
    function MsgController($scope) {
        var countDishes = 0;
        $scope.dishes="";
        $scope.message = "";
        $scope.note = "The following pattern (, ,) is not considered an empty item";

        var message = function() {
            if($scope.dishes == "") {
                return "Please enter data first";
            }
            else if(countDishes <= 3) {
                return "Enjoy";
            }
            return "Too much!";
        };

        $scope.checker = function() {
            if($scope.dishes != ""){
                var dishes = ($scope.dishes).split(',');            
                countDishes = dishes.length;
            }
                $scope.message = message();
        };
    };

})();