/**
 * Created by yaroslav on 11/5/16.
 */
'use strict';
var app = angular.module('MyApp', ['main.templates', 'messages','ngRoute', 'ui.router', 'admActors',
    'admGenres', 'admMovies', 'movies']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    //$urlRouterProvider.when("", "/");
    //$urlRouterProvider.when("/video", "/video");

    // For any unmatched url, send to /route1
    //$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'javascripts/ng-templates/main/app.tpl.html',
            data : { pageTitle: 'The Blog: Home' }
        })
        .state('app.home', {
            url: '/',
            templateUrl: 'javascripts/ng-templates/main/index.tpl.html',
            data : { pageTitle: 'The Blog: Home' }
        })
        .state('app.video',{
            url: '/video',
            templateUrl: 'javascripts/ng-templates/main/video.tpl.html',
            data : { pageTitle: 'The Blog: Video' }
        })
        .state('app.resume',{
            url: '/resume',
            templateUrl: 'javascripts/ng-templates/main/resume.tpl.html',
            data : { pageTitle: 'The Blog: Resume' }
        })
        .state('app.portfolio',{
            url: '/portfolio',
            templateUrl: 'javascripts/ng-templates/main/portfolio.tpl.html',
            data : { pageTitle: 'The Blog: Portfolio' }
        })
        .state('app.blog',{
            url: '/blog',
            templateUrl: 'javascripts/ng-templates/main/blog.tpl.html',
            data : { pageTitle: 'The Blog: Blog' }
        })
        .state('admin',{
            url: '/admin',
            templateUrl: 'javascripts/ng-templates/admin/carcas.tpl.html',
            data : { pageTitle: 'The Blog: Admin' }
        })
        .state('admin.home',{
            url: '/admin/',
            template: '<h1>Home</h1>',
            data : { pageTitle: 'The Blog: Admin' }
        })
        .state('admin.video',{
            url: '/video',
            template: '<div ui-view></div>',
            data : { pageTitle: 'The Blog: Admin - Video' }
        })
        .state('admin.video.actors',{
            url: '/actors',
            templateUrl: 'javascripts/ng-templates/admin/video-actors.tpl.html',
            data : { pageTitle: 'The Blog: Admin - Video - Actors' }
        })
        .state('admin.video.genres',{
            url: '/genres',
            templateUrl: 'javascripts/ng-templates/admin/video-genres.tpl.html',
            data : { pageTitle: 'The Blog: Admin - Video - Genres' }
        })
        .state('admin.video.movies',{
            url: '/movies',
            templateUrl: 'javascripts/ng-templates/admin/video-movies.tpl.html',
            data : { pageTitle: 'The Blog: Admin - Video - Movies' }
        });

    $urlRouterProvider.otherwise("/");
}]);
app.directive('myHeader', function(){
    return{
        restrict: "E",
        templateUrl: "/javascripts/ng-templates/main/header.tpl.html",
        controller: function(){
            //alert('ok');
        },
        controllerAs: 'headerCtrl'
    };
});
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                scope.boolChangeClass = true;
            } else {
                scope.boolChangeClass = false;
            }
            scope.$apply();
        });
    };
});
app.directive('focusMe', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            scope.$watch(attrs.focusMe, function(value) {
                if(value === true) {
                    console.log('value=',value);
                    //$timeout(function() {
                    element[0].focus();
                    scope[attrs.focusMe] = false;
                    //});
                }
            });
        }
    };
});
app.directive('updateTitle', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
        return {
            link: function(scope, element) {

                var listener = function(event, toState) {

                    var title = 'Default Title';
                    if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

                    $timeout(function() {
                        element.text(title);
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
]);