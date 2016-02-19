'use strict';

/**
 * @ngdoc overview
 * @name angular2App
 * @description
 * # angular2App
 *
 * Main module of the application.
 */
angular
  .module('angular2App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


var app = angular.module('angular2App');

app.controller('MainController', ['$scope',
    function MainController($scope) {

        $scope.animate = true;
        $scope.autoScroll = true;
        $scope.play = function() {
            $scope.animate = !$scope.animate;
            $scope.autoScroll = !$scope.autoScroll;

        };

    }
]);
