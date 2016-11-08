/**
 * Created by yaroslav on 5/1/16.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            dev: {
                options: {
                    script: "./bin/www"
                }
            }
        },
        watch: {
            express: {
                files: ['./bin/www', './routes/*.js', './app.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false,
                    livereload: 8082
                }
            },
            grunt: {
                files: ['./Gruntfile.js'],
                tasks: [],
                options: {
                    reload: true
                }
            },
            html: {
                files: ['./public/*.*', './public/images/*.*', "./views/*.jade", "./views/**/*.*", './public/stylesheets/*.css', './public/javascripts/app.min.js', './public/javascripts/app.admin.min.js'],
                tasks: [],
                options: {
                    livereload: 8082
                }
            },
            html2jsMain: {
                files: ['./public/javascripts/ng-templates/main/*.tpl.html', './public/javascripts/ng-templates/main/*.jade'],
                tasks: ['html2js:main']
            },
            html2jsAdmin: {
                files: ['./public/javascripts/ng-templates/admin/*.tpl.html', './public/javascripts/ng-templates/admin/*.jade'],
                tasks: ['html2js:admin']
            },
            angularMain: {
                files: ['./public/javascripts/app.js', './public/javascripts/ng-modules/main/*.js', './tmp/templates.js'],
                tasks: ['concat:main', 'uglify:main'],
                options: {
                    livereload: 8082
                }
            },
            angularAdmin: {
                files: ['./public/javascripts/app.admin.js', './public/javascripts/ng-modules/admin/*.js', './tmp/admin-templates.js'],
                tasks: ['concat:admin', 'uglify:admin'],
                options: {
                    livereload: 8082
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'public/javascripts/app.js', 'routes/*.js', './public/javascripts/ng-modules/main/*.js', './public/javascripts/ng-modules/admin/*.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            main: {
                src: ['./public/javascripts/app.js', './public/javascripts/ng-modules/main/*.js', './tmp/templates.js'],
                dest: './public/javascripts/app.concat.js'
            },
            admin: {
                src: ['./public/javascripts/app.admin.js', './public/javascripts/ng-modules/admin/*.js', './tmp/admin-templates.js'],
                dest: './public/javascripts/app.admin.concat.js'
            }
        },
        uglify: {
            main: {
                options: {
                    mangle: false
                },
                files: {
                    './public/javascripts/app.min.js': ['./public/javascripts/app.concat.js']
                }
            },
            admin: {
                options: {
                    mangle: false
                },
                files: {'./public/javascripts/app.admin.min.js':['./public/javascripts/app.admin.concat.js']}
            }
            
        },
        html2js: {
            main: {
                options: {
                    base: 'public',
                    module: 'main.templates',
                    jade: {
                        //this prevents auto expansion of empty arguments
                        //e.g. "div(ui-view)" becomes "<div ui-view></div>"
                        //     instead of "<div ui-view="ui-view"></div>"
                        doctype: "html"
                    }
                },
                src: ['./public/javascripts/ng-templates/main/*.tpl.html', './public/javascripts/ng-templates/main/*.jade'],
                dest: './tmp/templates.js'
            },
            admin: {
                options: {
                    base: 'public',
                    module: 'admin.templates',
                    jade: {
                        //this prevents auto expansion of empty arguments
                        //e.g. "div(ui-view)" becomes "<div ui-view></div>"
                        //     instead of "<div ui-view="ui-view"></div>"
                        doctype: "html"
                    }
                },
                src: ['./public/javascripts/ng-templates/admin/*.tpl.html', './public/javascripts/ng-templates/admin/*.jade'],
                dest: './tmp/admin-templates.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');

    //grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('default', ['express:dev', 'watch']);
    grunt.registerTask('build-main', ['html2js:main', 'concat:main', 'uglify:main']);
    grunt.registerTask('build-admin', ['html2js:admin', 'concat:admin', 'uglify:admin']);
};