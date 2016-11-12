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
})();;angular.module('admin.templates', ['javascripts/ng-templates/admin/carcas.tpl.html', 'javascripts/ng-templates/admin/dr-actors.tpl.html', 'javascripts/ng-templates/admin/dr-genres.tpl.html', 'javascripts/ng-templates/admin/dr-movies.tpl.html', 'javascripts/ng-templates/admin/video-actors.tpl.html', 'javascripts/ng-templates/admin/video-genres.tpl.html', 'javascripts/ng-templates/admin/video-movies.tpl.html']);

angular.module("javascripts/ng-templates/admin/carcas.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/carcas.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row header\">\n" +
    "        <div class=\"\">\n" +
    "            <div class=\"col-lg-10 col-sm-10\"><a href=\"/\" class=\"header-link\" target=\"_self\">Site</a></div>\n" +
    "\n" +
    "            <div class=\"col-lg-2 col-sm-2\">not logged</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-2 col-sm-2 admin-menu-wrapper\">\n" +
    "\n" +
    "            <ul class=\"admin-menu\">\n" +
    "                <li class=\"nav-section\">Home</li>\n" +
    "                <li class=\"nav-section\">Video\n" +
    "                    <ul>\n" +
    "                        <li><a href=\"/admin/video/genres\" class=\"nav-item\">Жанры</a></li>\n" +
    "                        <li><a href=\"/admin/video/actors\" class=\"nav-item\">Актеры</a></li>\n" +
    "                        <li><a href=\"/admin/video/movies\" class=\"nav-item\">Фильмы</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li class=\"nav-section\">Resume</li>\n" +
    "                <li class=\"nav-section\">Portfolio</li>\n" +
    "                <li class=\"nav-section\">Blog</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-10 content\">\n" +
    "            <ui-view></ui-view>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascripts/ng-templates/admin/dr-actors.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/dr-actors.tpl.html",
    "<!--div {{lastId}}-->\n" +
    "<div class=\"table-wrapper\">\n" +
    "    <table>\n" +
    "        <tr>\n" +
    "            <th class=\"col-sm-1\">ID</th>\n" +
    "            <th>Name</th>\n" +
    "            <th>Last name</th>\n" +
    "            <th class=\"col-sm-2\">Actions</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"a in actors\">\n" +
    "            <td class=\"ta-center\">{{a.id}}</td>\n" +
    "            <td> <span ng-hide=\"editActor\">{{a.first_name}}</span><span ng-show=\"editActor\" class=\"input-table-wrapper\">\n" +
    "          <input type=\"text\" ng-model=\"tmpFirst\"/></span></td>\n" +
    "            <td> <span ng-hide=\"editActor\">{{a.last_name}}</span><span ng-show=\"editActor\" class=\"input-table-wrapper\">\n" +
    "          <input type=\"text\" ng-model=\"tmpLast\"/></span></td>\n" +
    "            <td> <span ng-hide=\"editActor\">\n" +
    "          <button ng-click=\"editActor = ! editActor; tmpFirst = a.first_name; tmpLast = a.last_name\" class=\"btn\">Edit</button>\n" +
    "          <button ng-click=\"actorCtrl.deleteActor(a.id)\" class=\"btn\">Delete</button></span><span ng-show=\"editActor\" class=\"input-table-wrapper\">                   <i aria-hidden=\"true\" ng-click=\"editActor = ! editActor; actorCtrl.editActor(a.id, tmpFirst, tmpLast)\" class=\"fa fa-check pointer green m-l-5\"></i><i aria-hidden=\"true\" ng-click=\"editActor = ! editActor\" class=\"fa fa-times pointer red m-l-5\"></i></span></td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<button ng-click=\"actorCtrl.newActor()\" class=\"btn\">Добавить </button>\n" +
    "<div ng-show=\"actorCtrl.form.show\" class=\"fon\">\n" +
    "    <div id=\"actor-form\">\n" +
    "        <div class=\"title\">{{actorCtrl.form.title}}</div>\n" +
    "        <input type=\"text\" ng-model=\"actorCtrl.form.first\"/>\n" +
    "        <input type=\"text\" ng-model=\"actorCtrl.form.last\"/><span>\n" +
    "      <button ng-click=\"actorCtrl.form.ok()\" class=\"btn\">Ok</button>\n" +
    "      <button ng-click=\"actorCtrl.form.cancel()\" class=\"btn\">Cancel</button></span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascripts/ng-templates/admin/dr-genres.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/dr-genres.tpl.html",
    "<!--div {{lastId}}-->\n" +
    "<table>\n" +
    "    <tr>\n" +
    "        <th class=\"col-lg-1 col-sm-1\">ID</th>\n" +
    "        <th>Name</th>\n" +
    "        <th class=\"col-lg-2 col-sm-2\">Actions</th>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "<div class=\"table-wrapper\">\n" +
    "    <table>\n" +
    "\n" +
    "        <tr ng-repeat=\"t in tags\">\n" +
    "            <td class=\"col-lg-1 col-sm-1\">{{t.id}}</td>\n" +
    "            <td> <span ng-hide=\"editTag\">{{t.title}}</span><span ng-show=\"editTag\" class=\"input-table-wrapper\">\n" +
    "          <input type=\"text\" ng-model=\"tmpTag\"/><i aria-hidden=\"true\" ng-click=\"editTag = ! editTag; tagCtrl.editTag(t.id, tmpTag)\" class=\"fa fa-check pointer green m-l-5\"></i><i aria-hidden=\"true\" ng-click=\"editTag = ! editTag\" class=\"fa fa-times pointer red m-l-5\"></i></span></td>\n" +
    "            <td class=\"col-lg-2 col-sm-2\">\n" +
    "                <button ng-click=\"editTag = ! editTag; tmpTag = t.title\" class=\"btn\">Edit</button>\n" +
    "                <button ng-click=\"tagCtrl.deleteTag(t.id)\" class=\"btn\">Delete</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<button ng-click=\"tagCtrl.newTag()\" class=\"btn\">Добавить </button>\n" +
    "<message></message>\n" +
    "<div ng-show=\"tagCtrl.form.show\" class=\"fon\">\n" +
    "    <div id=\"genre-form\">\n" +
    "        <div class=\"title\">{{tagCtrl.form.title}}</div>\n" +
    "        <input type=\"text\" ng-model=\"tagCtrl.form.genre\" class=\"col-sm-8\"/><span>\n" +
    "      <button ng-click=\"tagCtrl.form.ok()\" class=\"btn\">Ok</button>\n" +
    "      <button ng-click=\"tagCtrl.form.cancel()\" class=\"btn\">Cancel</button></span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascripts/ng-templates/admin/dr-movies.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/dr-movies.tpl.html",
    "<!--div {{lastId}}-->\n" +
    "<div class=\"table-wrapper\">\n" +
    "    <table>\n" +
    "        <tr>\n" +
    "            <th class=\"col-sm-1\">ID</th>\n" +
    "            <th>Title</th>\n" +
    "            <th class=\"col-sm-1\">IMDB</th>\n" +
    "            <th class=\"col-sm-1\">Kinopoisk</th>\n" +
    "            <th class=\"col-sm-2\">Actions</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"m in movies\">\n" +
    "            <td>{{m.id}}</td>\n" +
    "            <td>{{m.title}}</td>\n" +
    "            <td>{{m.imdb}}</td>\n" +
    "            <td>{{m.kinopoisk}}</td>\n" +
    "            <td>\n" +
    "                <button ng-click=\"movieCtrl.editMovie(m)\" class=\"btn\">Edit</button>\n" +
    "                <button ng-click=\"movieCtrl.deleteMovie(m.id)\" class=\"btn\">Delete</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<message></message>\n" +
    "<button ng-click=\"movieCtrl.addMovie()\" class=\"btn\">Добавить</button>\n" +
    "<div ng-show=\"movieCtrl.form.show\" class=\"fon\">\n" +
    "    <form>\n" +
    "        <div id=\"movie-form\">\n" +
    "            <div class=\"title\">{{movieCtrl.form.header}}</div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Заголовок</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.title\" name=\"title\" required=\"required\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Год</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.year\" name=\"yesr\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Страна</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.country\" name=\"country\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Режисер</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.director\" name=\"director\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Изображение</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.image\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <span class=\"col-sm-7\">\n" +
    "                        <input type=\"file\" ngf-select=\"ngf-select\" ng-model=\"movieCtrl.form.image\" name=\"file\"\n" +
    "                               accept=\"image/*\" ngf-max-size=\"2MB\" ngf-model-invalid=\"errorFile\"\n" +
    "                               class=\"img-btn iblock vt\" class=\"col-sm-5\"/>\n" +
    "\n" +
    "                    </span>\n" +
    "                    <span class=\"image-preview col-sm-5\">\n" +
    "                        <img ng-if=\"!movieCtrl.form.image.name\" height=\"100\" ng-src=\"/images/movies/{{movieCtrl.form.id}}_{{movieCtrl.form.image}}\" tip=\"icon\"/>\n" +
    "                        <img ng-if=\"movieCtrl.form.image.name\" height=\"100\" ngf-thumbnail=\"movieCtrl.form.image\"/>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Рейтинг IMDB</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.imdb\" name=\"imdb\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Рейтинг Kinopoisk</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.kinopoisk\" name=\"kinopoisk\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <label class=\"col-sm-3 \">Описание</label>\n" +
    "                    <input type=\"text\" ng-model=\"movieCtrl.form.description\" name=\"desc\" class=\"col-sm-8\"/>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <span>\n" +
    "                <input type=\"submit\" ng-click=\"movieCtrl.form.ok()\" value=\"Ok\" class=\"btn\"/>\n" +
    "                <button ng-click=\"movieCtrl.form.cancel()\" class=\"btn\">Cancel</button>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("javascripts/ng-templates/admin/video-actors.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/video-actors.tpl.html",
    "<h1>Актеры</h1>\n" +
    "\n" +
    "<actor-table></actor-table>");
}]);

angular.module("javascripts/ng-templates/admin/video-genres.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/video-genres.tpl.html",
    "<h1>Жанры</h1>\n" +
    "\n" +
    "<genre-table></genre-table>");
}]);

angular.module("javascripts/ng-templates/admin/video-movies.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/admin/video-movies.tpl.html",
    "<h1>Фильмы</h1>\n" +
    "\n" +
    "<movie-table></movie-table>");
}]);
