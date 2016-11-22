angular.module('main.templates', ['javascripts/ng-templates/main/app.tpl.html', 'javascripts/ng-templates/main/blog.tpl.html', 'javascripts/ng-templates/main/index.tpl.html', 'javascripts/ng-templates/main/movie-card.tpl.html', 'javascripts/ng-templates/main/popular-vidgets.tpl.html', 'javascripts/ng-templates/main/portfolio.tpl.html', 'javascripts/ng-templates/main/resume.tpl.html', 'javascripts/ng-templates/main/video.tpl.html']);

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
    "<div class=\"container\">\n" +
    "    <h1>Blog</h1>\n" +
    "\n" +
    "    <div class=\"row\" >\n" +
    "        <div class=\"col-lg-9 col-md-9 col-sm-9\" style=\"border: 1px solid black\">\n" +
    "            <div class=\"article\" ng-repeat=\"a in articles\">\n" +
    "                <img class=\"image\" ng-src=\"{{a.img || '/images/no-image-available.png'}}\" />\n" +
    "                <div class=\"title\">{{a.title}}</div>\n" +
    "\n" +
    "                <p class=\"content\" ng-bind-html=\"a.text\"></p>\n" +
    "                <div class=\"info\">\n" +
    "                    <span class=\"date col-sm-4 col-lg-4 col-md-4\">{{a.date}}</span>\n" +
    "                    <span class=\"tags\">\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"tg in a.tags\"><a href>{{tg.title}}</a></li>\n" +
    "                        </ul>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\">\n" +
    "            <div class=\"widget\">\n" +
    "                <popular-vidgets></popular-vidgets>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
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

angular.module("javascripts/ng-templates/main/popular-vidgets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascripts/ng-templates/main/popular-vidgets.tpl.html",
    "<div class=\"tabs-wrap\">\n" +
    "    <div class=\"tabs\">\n" +
    "        <ul>\n" +
    "            <li ng-click=\"pvCtrl.setTab('popular')\" ng-class=\"{'tab-active': pvCtrl.isTab('popular')}\">Popular</li>\n" +
    "            <li ng-click=\"pvCtrl.setTab('comments')\" ng-class=\"{'tab-active': pvCtrl.isTab('comments')}\">Comments</li>\n" +
    "            <li ng-click=\"pvCtrl.setTab('tags')\" ng-class=\"{'tab-active': pvCtrl.isTab('tags')}\">Tags</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-container\" ng-show=\"pvCtrl.isTab('popular')\">\n" +
    "        <ul>\n" +
    "            <li class=\"popular\">\n" +
    "\n" +
    "                    <img class=\"image\" ng-src=\"{{p.img || '/images/no-image-available.png'}}\" />\n" +
    "                    <span>\n" +
    "                        <div class=\"title\">Popular #1</div>\n" +
    "                        <div class=\"content\">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недо</div>\n" +
    "                    </span>\n" +
    "\n" +
    "            </li>\n" +
    "            <li class=\"popular\">\n" +
    "\n" +
    "                    <img class=\"image\" ng-src=\"{{p.img || '/images/no-image-available.png'}}\" />\n" +
    "                    <span>\n" +
    "                        <div class=\"title\">Popular #2</div>\n" +
    "                        <div class=\"content\">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недо</div>\n" +
    "                    </span>\n" +
    "\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-container\" ng-show=\"pvCtrl.isTab('comments')\">\n" +
    "        <ul>\n" +
    "            <li class=\"comment\" ng-repeat=\"c in lastComments\">\n" +
    "\n" +
    "                <img class=\"image\" ng-src=\"{{c.img || '/images/no-image-available.png'}}\" />\n" +
    "\n" +
    "                <div class=\"text\">{{c.author}} on {{c.article}}</div>\n" +
    "            </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-container\" ng-show=\"pvCtrl.isTab('tags')\">\n" +
    "        <ul>\n" +
    "            <li class=\"tag\" ng-repeat=\"t in tags\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i><a href>\n" +
    "                {{t.title}}</a></li>\n" +
    "        </ul>\n" +
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
