/**
 * Created by anilkatta on 12/29/15.
 */

var app = angular.module('AnRaApp', []);

app.controller('HomePageCtrl', ['$scope', function($scope){
    $scope.testmessage = 'Test Message';
}]);