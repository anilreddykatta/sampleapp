/**
 * Created by anilkatta on 1/2/16.
 */

angular.module('AnRaApp.Services', [])
	   .factory('AuthenticationService', ['$http', '$cookieStore', '$localStorage', '$window', function($http, $cookieStore, $localStorage, $window){
		   var authService = {};

		   authService.Login = function(username, password, callback) {

		   };

		   return authService;
	   }]);