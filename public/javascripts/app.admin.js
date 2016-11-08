(function () {
    var app = angular.module('myAdmin', ["admin.templates", 'ngRoute', 'messages', 'genres', 'actors', 'movies']);
    app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/admin', {
                template: '<h1>Adminka</h1>'
            })
            .when('/video/genres', {
                templateUrl: '/javascripts/ng-templates/admin/video-genres.tpl.html'
            })
            .when('/video/actors', {
                templateUrl: '/javascripts/ng-templates/admin/video-actors.tpl.html'
            })
            .when('/video/movies', {
                templateUrl: '/javascripts/ng-templates/admin/video-movies.tpl.html'
            })
            .otherwise({
                redirectTo: '/admin'
            });
    }]);
    app.controller('adminCtrl', function($scope, $location){
        $scope.loc = $location.path();
        $scope.$location = $location;
    });
    app.directive('carcas', function(){
        return{
            restrict: "E",
            templateUrl: '/javascripts/ng-templates/admin/carcas.tpl.html'

        };
    });
})();