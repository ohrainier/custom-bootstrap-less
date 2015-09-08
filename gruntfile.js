sassFiles = {
	'assets/css/style.css' : 'assets/sass/style.scss'
}

module.exports = function(grunt) {

    grunt.initConfig({

    	pkg: grunt.file.readJSON('package.json'),
		
		/*
		project: {
    		assets: ['<%= project %>/assets'],
    		css: ['<%= project.assets %>/sass/style.scss']
		},
		*/

		sass: {
			dist: {
				options: {
					style: 'expanded',
					compass: false
				},
				files: sassFiles
			}
		},
		
		watch: {
			sass: {
				files: 'assets/sass/{,*/}*.{scss,sass}',
				tasks: ['sass:dist']
			}
		}

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
    	'watch'
    ]);

};