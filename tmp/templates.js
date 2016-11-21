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
    "        <div class=\"col-lg-10 col-md-10 col-sm-10\" style=\"text-align: center\">\n" +
    "            <div class=\"article\">\n" +
    "                <img class=\"image\" ng-src=\"{{a.img || '/images/no-image-available.png'}}\" />\n" +
    "                <div class=\"title\">Exsample article #1</div>\n" +
    "\n" +
    "                <div class=\"content\">\n" +
    "\n" +
    "                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезызвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>\n" +
    "\n" +
    "                    <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"info\">\n" +
    "                    <span class=\"date col-sm-4 col-lg-4 col-md-4\">14.11.2016</span>\n" +
    "                    <span class=\"tags\">\n" +
    "                        <ul>\n" +
    "                            <li><a href>All</a></li>\n" +
    "                            <li><a href>Featured</a></li>\n" +
    "                        </ul>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"article\">\n" +
    "                <img class=\"image\" ng-src=\"{{a.img || '/images/no-image-available.png'}}\" />\n" +
    "                <div class=\"title\">Exsample article #2</div>\n" +
    "\n" +
    "                <div class=\"content\">\n" +
    "\n" +
    "                    <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезызвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>\n" +
    "\n" +
    "                    <p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"info\">\n" +
    "                    <span class=\"date col-sm-4 col-lg-4 col-md-4\">21.11.2016</span>\n" +
    "                    <span class=\"tags\">\n" +
    "                        <ul>\n" +
    "                            <li><a href>All</a></li>\n" +
    "                            <li><a href>Featured</a></li>\n" +
    "                            <li><a href>Movies</a></li>\n" +
    "                        </ul>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-2 col-md-2 col-sm-2\">\n" +
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
    "            <li ng-click=\"pvCtrl.setTab('popular')\">Popular</li>\n" +
    "            <li ng-click=\"pvCtrl.setTab('comments')\">Comments</li>\n" +
    "            <li ng-click=\"pvCtrl.setTab('tags')\">Tags</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-container\" ng-show=\"pvCtrl.isTab('popular')\">\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <div class=\"popular\">\n" +
    "                    <div class=\"title\">Popular #1</div>\n" +
    "                    <div class=\"content\">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недо</div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <div class=\"popular\">\n" +
    "                    <div class=\"title\">Popular #2</div>\n" +
    "                    <div class=\"content\">По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых клиентов недо</div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"tab-container\" ng-show=\"pvCtrl.isTab('comments')\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"tab-container\" ng-show=\"pvCtrl.isTab('tags')\">\n" +
    "\n" +
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
