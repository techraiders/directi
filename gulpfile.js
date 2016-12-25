// Gulp.js configuration

// include gulp and plugins
var
	gulp = require('gulp'),
	newer = require('gulp-newer'),
	htmlclean = require('gulp-htmlclean'),
	imagemin = require('gulp-imagemin'),
	size = require('gulp-size'),
	del = require('del'),
	pkg = require('./package.json');

//file locations
var
	devBuild = ((process.env.NODE_ENV || 'development'.trim().toLowerCase()) !== 'production'),
	source = 'source/',
	dest = 'build/',


// write here html variable

	images = {
		in: source + 'img/*.*',
		out: dest + 'img/'
	};

// show build type
console.log(pkg.name + ' ' + pkg.version + ', ' + (devBuild ? 'development' : 'production') + ' build');


// cleans the build folder
gulp.task('clean', function() {
	del([
		dest + '*'
	]);
});

// build HTML files


// manages images
gulp.task('images', function() {
	return gulp.src(images.in)
		.pipe(newer(images.out))
		.pipe(imagemin())
		.pipe(gulp.dest(images.out));
});


// default task
gulp.task('default', ['images'], function() {
	//html changes
	//gulp.watch(html.watch['html']);
	
	// images changes
	gulp.watch(images.in, ['images']);
});