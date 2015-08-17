'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style.css': 'style.scss'
				},
				options : {
					style : 'compressed',
					map : false
				}
			}
		},
		watch: {
			css: {
				files: ['style.scss',
				],
				tasks: ['sass']
			} , 
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}

