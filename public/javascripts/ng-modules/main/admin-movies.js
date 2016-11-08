(function () {
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
                        
                        $http.post('/admin/edit/video', {id: idn, params: query})
                            .then(
                                function(res){
                                    if(img.name){
                                        upl(img, idn);
                                    }
                                    
                                    reload();         
                                },
                                function(err){ $scope.popShow(err.status + ": " + err.statusText); }
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

