angular.module('main.templates', ['javascripts/ng-templates/main/app.tpl.html', 'javascripts/ng-templates/main/blog.tpl.html', 'javascripts/ng-templates/main/index.tpl.html', 'javascripts/ng-templates/main/movie-card.tpl.html', 'javascripts/ng-templates/main/portfolio.tpl.html', 'javascripts/ng-templates/main/resume.tpl.html', 'javascripts/ng-templates/main/video.tpl.html']);

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
    "        <movie-card ng-repeat=\"m in movies\" movie=\"m\" style=\"z-index: {{1000 - $index}}\"></movie-card>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
