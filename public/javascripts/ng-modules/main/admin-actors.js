(function(){
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
})();