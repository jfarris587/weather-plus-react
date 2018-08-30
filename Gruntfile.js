
module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options:{
        },
        files: [
        {
          expand: true,
          cwd: 'src/scss/',
          src: ['main.scss'],
          dest: 'src',
          ext: '.css'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['src/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        },
      },
    }
  });

  grunt.registerTask('dev', ['sass', 'watch']);
}
