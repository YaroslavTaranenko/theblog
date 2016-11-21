/**
 * Created by yaroslav on 11/21/16.
 */
'use strict';
var app = angular.module('vidgets', []);

app.directive('popularVidgets', function(){
    return{
        restrict: "EA",
        //scope: {m: '=movie'},
        templateUrl: '/javascripts/ng-templates/main/popular-vidgets.tpl.html',
        controller: function($scope, $http){
            this.tab = '';
            this.isTab = function(tab){
                return this.tab == tab;
            };
            this.setTab = function(tab){
                this.tab = tab;
            }
        },
        controllerAs: 'pvCtrl'
    };
});