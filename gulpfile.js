var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function (done) {
    gulp.src("*.scss", { base: "./" })
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 1% in AU'],
            remove: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
    done();
});
