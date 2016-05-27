var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var AutoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new AutoPrefixPlugin({
	browsers: ['last 2 versions']
});

var STYLES = './**/*.less';

gulp.task('styles', function() {
	return gulp.src([STYLES, '!node_modules/**/*'])
		.pipe(plumber())
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
	gulp.watch(STYLES, ['styles']);
	console.log('        . . . . o o o o o' + '\n' +
'               _____      o              ' + '\n' +
'      ____====  ]OO|_n_n__][.            ' + '\n' +
'     [________]_|__|________)<           ' + '\n' +
'      oo    oo   oo OOOO-| oo\\_         ' + '\n' +
'  +--+--+--+--+--+--+--+--+-+-+--+--+--+--+');
});

gulp.task('default', ['styles']);
