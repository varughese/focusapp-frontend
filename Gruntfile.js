module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'sass',
						src: [
							'*.scss', '*.sass'
						],
						dest: './public/lib/css',
						ext: '.css'
					}
				]
			}
		},
		watch: {
			scripts: {
				files: ['sass/**/*.*'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify']);

};
