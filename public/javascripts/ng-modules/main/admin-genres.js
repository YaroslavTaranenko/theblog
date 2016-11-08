(function(){
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
})();