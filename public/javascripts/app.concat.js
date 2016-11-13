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
]);;(function(){
    var app = angular.module('admActors', [])
    .directive('actorTable', function(){
        return{
            restrict: "E", 
            templateUrl: "javascripts/ng-templates/admin/dr-actors.tpl.html",
            controller: function($scope, $http){
                
                this.form = {
                    title: 'Введите имя актера',
                    first: '',
                    last: '',
                    show: false
                };
                this.newActor = function(){
                    this.form.title = 'Введите имя актера';
                    this.form.first = '';
                    this.form.last = '';
                    this.form.show = true;
                    this.form.ok = this.addActor;
                    this.form.refresh = this.getActors;
                    this.form.cancel = function(){this.show = false;};
                };
                this.getActors = function(){
                    $http.post('/dbworker/mysql', {query: "select * from actors"})
                    .then(function(res){$scope.actors = res.data.rows; },
                          function(err){alert(err.status + " - " + err.statusText);});
                };
                this.getActors();
                
                this.addActor = function(){                    
                    /*if(this.genre.length <= 0){
                        alert('Введите название');
                        return;
                    }*/
                    $http.post('/dbworker/insert/actors', {fName: this.first, lName: this.last })
                        .then(
                            function(res){
                                $scope.lastId = res.data; 
                                $http.post('/dbworker/mysql', {query: "select * from actors"})
                                    .then(function(res){$scope.actors = res.data.rows;},
                                          function(err){alert(err.data);});         
                                         },
                            function(err){alert(err.data);}
                    );
                    this.show = false;
                };
                this.deleteActor = function(id){
                    
                    $http.post('/dbworker/delete/actors', {id: id})
                        .then(
                            function(res){
                                $http.post('/dbworker/mysql', {query: "select * from actors"})
                                    .then(function(res){$scope.actors = res.data.rows;},
                                          function(err){alert(err.data);});         
                                         },
                            function(err){alert(err.data);}
                        );
                };
                this.editActor = function(id, fname, lname){
                    var query = "first_name = '" + fname + "', last_name = '" + lname + "' ";
                    $http.post('/dbworker/edit/actors', {id: id, params: query})
                        .then(
                            function(res){
                                $http.post('/dbworker/mysql', {query: "select * from actors"})
                                    .then(function(res){$scope.actors = res.data.rows;},
                                          function(err){alert(err.data);});         
                                         },
                            function(err){alert(err.data);}
                        );
                }
            },
            controllerAs: "actorCtrl"
        };
    });
})();;(function(){
    var app = angular.module('admGenres', [])
    .directive('genreTable', function(){
        return{
            restrict: "E", 
            templateUrl: "javascripts/ng-templates/admin/dr-genres.tpl.html",
            controller: function($scope, $http){
                this.form = {title: 'Введите название жанра',
                    genre: '',
                    show: false
                };
                this.newTag = function(){
                    this.form.title = 'Введите название жанра';
                    this.form.genre = '';
                    this.form.show = true;
                    this.form.ok = this.addTag;
                    this.form.refresh = this.getTags;
                    this.form.cancel = function(){this.show = false;};
                };
                this.getTags = function(){
                    $http.post('/dbworker/mysql', {query: "select * from genres"})
                    .then(function(res){$scope.tags = res.data.rows;},
                          function(err){$scope.popShow(err.status + " - " + err.statusText);});
                };
                this.getTags();
                
                this.addTag = function(){                    
                    if(this.genre.length <= 0){
                        alert('Введите название');
                        return;
                    }
                    $http.post('/dbworker/insert/tags', {tag: this.genre })
                        .then(
                            function(res){
                                $scope.lastId = res.data; 
                                $http.post('/dbworker/mysql', {query: "select * from genres"})
                                    .then(function(res){$scope.tags = res.data.rows;},
                                          function(err){$scope.popShow(err.status + " - " + err.statusText);});         
                                         },
                            function(err){alert(err.status + " - " + err.statusText);}
                    );
                    this.show = false;
                };
                this.deleteTag = function(id){
                    
                    $http.post('/dbworker/delete/genres', {id: id})
                        .then(
                            function(res){
                                $http.post('/dbworker/mysql', {query: "select * from genres"})
                                    .then(function(res){$scope.tags = res.data.rows;},
                                          function(err){$scope.popShow(err.status + " - " + err.statusText);});         
                                         },
                            function(err){$scope.popShow(err.status + " - " + err.statusText);}
                        );
                };
                this.editTag = function(id, title){
                    var params = "title = '" + title + "'";
                    $http.post('/dbworker/edit/genres', {id: id, params: params})
                        .then(
                            function(res){
                                $http.post('/dbworker/mysql', {query: "select * from genres"})
                                    .then(function(res){$scope.tags = res.data.rows;},
                                          function(err){$scope.popShow(err.status + " - " + err.statusText);});         
                                         },
                            function(err){alert($scope.popShow(err.status + " - " + err.statusText));}
                        );
                }
            },
            controllerAs: "tagCtrl"
        };
    });
})();;(function () {
    var app = angular.module('admMovies', ['ngFileUpload'])
        .directive('movieTable', function () {
            return {
                restrict: "E",
                templateUrl: "javascripts/ng-templates/admin/dr-movies.tpl.html",
                controller: ['$scope', 'Upload', '$http', function ($scope, Upload, $http) {
                    this.form = {
                        header: "Новый фильм",
                        upload: this.uploadFile
                    };
                    this.getMovies = function(){
                        $http.post('/dbworker/mysql', {query: "SELECT * FROM video;"})
                            .then(
                                function(res){$scope.movies = res.data.rows; },
                                function(err){$scope.popShow(err.status + " - " + err.statusText); }
                        );
                    };
                    this.getMovies();
                    this.addMovie = function () {
                        this.form.header = "Новый фильм";
                        this.form.title = '';
                        this.form.year = '';
                        this.form.country = '';
                        this.form.director = '';
                        this.form.image = null;
                        this.form.imdb = '';
                        this.form.kinopoisk = '';
                        this.form.description = '';
                        this.form.ok = this.insertMovie;
                        this.form.cancel = function () { this.show = false; };
                        this.form.show = true;
                        this.form.upload = this.uploadFile;
                        this.form.refresh = this.getMovies;
                    };
                    this.editMovie = function (m) {
                        this.form.header = "Редактировать фильм";
                        this.form.id = m.id;
                        this.form.title = m.title;
                        this.form.year = m.year;
                        this.form.country = m.country;
                        this.form.director = m.director;
                        this.form.image = m.image;
                        this.form.imdb = m.imdb;
                        this.form.kinopoisk = m.kinopoisk;
                        this.form.description = m.description;
                        this.form.ok = this.updateMovie;
                        this.form.cancel = function () { this.show = false; };
                        this.form.show = true;
                        this.form.upload = this.uploadFile;
                        this.form.refresh = this.getMovies;
                    };
                    this.insertMovie = function () {
                        /*if(this.img.name){
                            this.upload(this.img);                            

                            this.img = this.img.name;
                        }*/
                        var tmpImg;
                        var img = this.image;
                        var upl = this.upload;
                        var reload = this.refresh;
                        if(this.image.name){
                            tmpImg = this.image.name;
                        }else{
                            tmpImg = this.image;
                        }
                        
                        $http.post('/dbworker/insert/movie', {title: this.title, year: this.year, country: this.country, director: this.director,
                                                          image: tmpImg, imdb: this.imdb, kinopoisk: this.kinopoisk, description: this.description})
                            .then(
                                function(res){
                                    //alert(img);
                                    $scope.popShow($scope.lastId = res.data); 
                                    if(img.name){
                                        //img.name = res.data + "_" + img.name;
                                        
                                        upl(img, res.data);
                                    }
                                    reload();
                                 },
                                function(err){$scope.popShow(err.status + ": " + err.statusText); }
                            );
                        
                        this.show = false;
                    };
                    this.deleteMovie = function(id){
                    
                    $http.post('/dbworker/delete/video', {id: id})
                        .then(
                            function(res){
                                $http.post('/dbworker/mysql', {query: "select * from video"})
                                    .then(function(res){$scope.movies = res.data.rows;},
                                          function(err){$scope.popShow(err.status + ": " + err.statusText); });         
                                         },
                            function(err){alert(err.data);}
                        );
                    };
                    this.updateMovie = function(){
                        var tmpImg;
                        var img = this.image;
                        var upl = this.upload;
                        var reload = this.refresh;
                        var idn = this.id;
                        if(this.image.name){
                            tmpImg = this.image.name;
                        }else{
                            tmpImg = this.image;
                        }
                        var query = " title = '" + this.title + 
                                    "', year = " + this.year + 
                                    ", country = '" + this.country + 
                                    "', director = '" + this.director + 
                                    "', image = '" + tmpImg + 
                                    "', imdb = " + this.imdb + 
                                    ", kinopoisk = " + this.kinopoisk + 
                                    ", description = '" + this.description + "' ";
                        
                        $http.post('/dbworker/edit/video', {id: idn, params: query})
                            .then(
                                function(res){
                                    if(img.name){
                                        upl(img, idn);
                                    }
                                    
                                    reload();         
                                },
                                function(err){ $scope.popShow(err.status + ": " + err.statusText); alert(err.status + ": " + err.statusText); }
                            );
                        this.show = false;
                    };
                    this.uploadFile = function (file, id,  next) {
                        Upload.upload({ 
                            url:'/dbworker/upload',
                            data: {'file': file, location: '/images/movies', userID: id}
                        }).then(function (response) {
                            next();
                        }, function (response) {
                            if (response.status > 0)
                                $scope.errorMsg = response.status + ': ' + response.statusText;
                        }, function (evt) {
                            // Math.min is to fix IE which reports 200% sometimes
                            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                        });
                    };
                }],
                controllerAs: "movieCtrl"
            };
        });
})();

;(function() {
    var app = angular.module('messages', [])
    .directive('message', function(){
        return{
            restrict: "E",
            template: '<div id="pop" ng-show="popvisible"><span>{{pMsg}}</span><button ng-click="popvisible = false">Ok</button></div>',
            controller: ['$scope', '$timeout', function($scope, $timeout){
                $scope.pMsg = "Hello world";
                $scope.popvisible = false;


                $scope.popShow = function(msg){
                    $scope.pMsg = msg;
                    $scope.popvisible = true;
                    $timeout(function(){$scope.popvisible = false;}, 3000);
                    //alert('It\'s work');
                };
            }],
            controllerAs: "pop"
        };
    });

})();;/**
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
        restrict: "EA",
        scope: {m: '=movie'},
        templateUrl: '/javascripts/ng-templates/main/movie-card.tpl.html'
    };
});;angular.module('main.templates', ['javascripts/ng-templates/main/app.tpl.html', 'javascripts/ng-templates/main/blog.tpl.html', 'javascripts/ng-templates/main/index.tpl.html', 'javascripts/ng-templates/main/movie-card.tpl.html', 'javascripts/ng-templates/main/portfolio.tpl.html', 'javascripts/ng-templates/main/resume.tpl.html', 'javascripts/ng-templates/main/video.tpl.html']);

angular.module("javascripts/ng-templates/main/app.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/app.tpl.html",
    "<div class=\"top-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <span class=\"top-header-item\">\n" +
    "            <i aria-hidden=\"aria-hidden\" class=\"fa fa-phone\"></i>&nbsp;+7 777 139 16 73\n" +
    "        </span>\n" +
    "        <span class=\"top-header-item\">\n" +
    "            <i aria-hidden=\"aria-hidden\" class=\"fa fa-envelope-o\"></i>\n" +
    "            <a href=\"mailto:taranenkojaroslav@gmail.com\">&nbsp; taranenkojaroslav@gmail.com</a>\n" +
    "        </span>\n" +
    "        <ul class=\"top-header-menu right\">\n" +
    "            <li><a href=\"/admin\" target=\"_self\">log in</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div id=\"header\" scroll=\"scroll\" ng-class=\"{min:boolChangeClass}\">\n" +
    "    <div class=\"container\">\n" +
    "        <a href=\"/\" class=\"logo\"></a>\n" +
    "        <div class=\"header-menu right\">\n" +
    "            <ul ng-hide=\"showSearch\">\n" +
    "                <li><a href=\"/\">Home</a></li>\n" +
    "                <li><a href=\"/video\">Video</a></li>\n" +
    "                <li><a href=\"/resume\">Resume</a></li>\n" +
    "                <li><a href=\"/portfolio\">Portfolio</a></li>\n" +
    "                <li><a href=\"/blog\">Blog</a></li>\n" +
    "                <li ng-click=\"focusSearch = true\"><a href ng-click=\"showSearch = !showSearch\"><i aria-hidden=\"aria-hidden\" class=\"fa fa-search\"></i></a></li>\n" +
    "            </ul>\n" +
    "            <form id=\"main-search-form\" name=\"mainSearch\" ng-show=\"showSearch\">\n" +
    "                <input type=\"text\" placeholder=\"SEARCH...\" focus-me=\"focusSearch\" class=\"main-search-field\"/>\n" +
    "                <a ng-click=\"showSearch = !showSearch\" href class=\"close-search\"><i aria-hidden=\"aria-hidden\" class=\"fa fa-times\"></i></a>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"subheader\"></div>\n" +
    "<div ui-view></div>");
}]);

angular.module("javascripts/ng-templates/main/blog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/blog.tpl.html",
    "<h1>Blog</h1>");
}]);

angular.module("javascripts/ng-templates/main/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/index.tpl.html",
    "<h1>Home</h1>");
}]);

angular.module("javascripts/ng-templates/main/movie-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/movie-card.tpl.html",
    "<div class=\"movie-card\">\n" +
    "    <div class=\"img-wrapper\">\n" +
    "        <img ng-src=\"/images/movies/{{m.id}}_{{m.image}}\" class=\"movie-image\" />\n" +
    "    </div>\n" +
    "    <div style=\"clear: both;\"></div>\n" +
    "    <div class=\"movie-title\">{{m.title}} ({{m.year}})</div>\n" +
    "    <div class=\"movie-properties\">\n" +
    "        <div class=\"movie-prop\"><b>Страна: </b>{{m.country}}</div>\n" +
    "        <div class=\"movie-prop\"><b>Режисер: </b>{{m.director}}</div>\n" +
    "        <div class=\"movie-rating\"><b>IMDB: </b>{{m.imdb}}</div>\n" +
    "        <div class=\"movie-rating\"><b>Kinopoisk: </b>{{m.kinopoisk}}</div>\n" +
    "        <div class=\"movie-desc\">{{m.description}}<a href=\"#\">asdf</a></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("javascripts/ng-templates/main/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/portfolio.tpl.html",
    "<h1>Portfolio</h1>");
}]);

angular.module("javascripts/ng-templates/main/resume.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/resume.tpl.html",
    "<h1>Resume</h1>");
}]);

angular.module("javascripts/ng-templates/main/video.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/video.tpl.html",
    "<div class=\"container\" ng-controller=\"movieCtrl as mc\">\n" +
    "    <row>\n" +
    "        <h1>Video</h1>\n" +
    "    </row>\n" +
    "    <div id=\"movie-catalog\">\n" +
    "        <movie-card ng-repeat=\"m in movies\" movie=\"m\" style=\"z-index: {{1000 - $index}}; margin-bottom: 50px; display: inline-block;\"></movie-card>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
