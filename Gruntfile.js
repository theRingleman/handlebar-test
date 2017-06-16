module.exports = function(grunt) {  
  'use strict';

  // load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // create configureation object
  grunt.initConfig({

    handlebars: {
      compile: {
        options: {

          // configure a namespace for your templates
          namespace: 'AccountValidation.Templates',

          // convert file path into a function name
          // in this example, I convert grab just the filename without the extension 
          processName: function(filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1].split('.')[0];
          }

        },

        // output file: input files
        files: {
          'templates.js': './scripts/templates/*.handlebars'
        }
      }
    },

    watch: {
      scripts: {
        files: ['./scripts/templates/*.hbs'],
        tasks: ['handlebars']
      }
    }

  });

}