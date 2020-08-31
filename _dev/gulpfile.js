const { src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;

exports.default = function () {
	return src('src/js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(dest('../assets/js'));
}

exports.watch = function () {
	watch('src/js/*.js', function () {
		return src('src/js/*.js')
			.pipe(babel())
			.pipe(dest('../assets/js'));
	})
}