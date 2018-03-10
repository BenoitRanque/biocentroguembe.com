module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		responsive_images: {
			xs: {
				options: {
					// Task-specific options go here.
					engine: 'im',
					newFilesOnly: true,
					sizes: [{ rename: false, width: '25%' }]
				},
				files: [{
					// Target-specific file lists and/or options go here.
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/statics/img/lg',
					dest: 'src/statics/img/xs'
				}]
			},
			sm: {
				options: {
					// Task-specific options go here.
					engine: 'im',
					newFilesOnly: true,
					sizes: [{ rename: false, width: '50%' }]
				},
				files: [{
					// Target-specific file lists and/or options go here.
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/statics/img/lg',
					dest: 'src/statics/img/sm'
				}]
			},
			md: {
				options: {
					// Task-specific options go here.
					engine: 'im',
					newFilesOnly: true,
					sizes: [{ rename: false, width: '75%' }]
				},
				files: [{
					// Target-specific file lists and/or options go here.
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/statics/img/lg',
					dest: 'src/statics/img/md'
				}]
			},
			xs_all: {
				options: {
					// Task-specific options go here.
					engine: 'im',
					newFilesOnly: false,
					sizes: [{ rename: false, width: '25%' }]
				},
				files: [{
					// Target-specific file lists and/or options go here.
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/statics/img/lg',
					dest: 'src/statics/img/xs'
				}]
			},
			sm_all: {
				options: {
					// Task-specific options go here.
					engine: 'im',
					newFilesOnly: false,
					sizes: [{ rename: false, width: '50%' }]
				},
				files: [{
					// Target-specific file lists and/or options go here.
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/statics/img/lg',
					dest: 'src/statics/img/sm'
				}]
			},
			md_all: {
				options: {
					// Task-specific options go here.
					engine: 'im',
					newFilesOnly: false,
					sizes: [{ rename: false, width: '75%' }]
				},
				files: [{
					// Target-specific file lists and/or options go here.
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/statics/img/lg',
					dest: 'src/statics/img/md'
				}]
			}
	  },
		watch: {
			files: ['src/statics/img/lg/**/*.{jpg,gif,png}'],
			tasks: ['responsive_images:md', 'responsive_images:sm', 'responsive_images:xs']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('resizeAll', ['responsive_images:md_all', 'responsive_images:sm_all', 'responsive_images:xs_all']);
	grunt.registerTask('resize', ['responsive_images:md', 'responsive_images:sm', 'responsive_images:xs']);
	grunt.registerTask('default', ['resize'])
}
