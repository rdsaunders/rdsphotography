var gulp         = require('gulp');
var imageResize  = require('gulp-image-resize');
var webp         = require('gulp-webp');
var imagemin     = require('gulp-imagemin');
var newer        = require('gulp-newer');
var rename       = require("gulp-rename");



// Optimizes and copies image files.
gulp.task('images', function() {
    return gulp.src('_photos/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('photos'))
});

// Optimizes and copies image files.
gulp.task('webp', function() {
    return gulp.src([
        '_photos/**/*.jpg'
    ],  {base: './_photos/'}) 
        .pipe(webp())
        .pipe(gulp.dest('./photo-sets/'))
});


// Optimizes and copies image files.
gulp.task('resize', function() {
    return gulp.src([
        '_photos/**/*.jpg'
    ],  {base: './_photos/'}) 
    .pipe(imageResize({
        width : 500,
        crop : false,
        upscale : false
      }))
    .pipe(webp())
    .pipe(rename(function (path) { path.basename += "-500"; }))
    .pipe(gulp.dest('./photo-sets/'))
});
