/**
 * Created by yaroslav on 11/8/16.
 */
'use strict';
var app = angular.module('movies', []);

app.controller('movieCtrl', function($http, $scope){
    //alert('movies');
    this.getMovies = function(){
        $http.post('/dbworker/mysql', {query: "SELECT * FROM video;"})
            .then(
                function(res){$scope.movies = res.data.rows; },
                function(err){$scope.popShow(err.status + " - " + err.statusText); }
            );
    };
    this.getMovies();
});

app.directive('movieCard', function(){
    return{
        restrict: "E",
        scope: {movie: '='},
        template: ''
    };
});