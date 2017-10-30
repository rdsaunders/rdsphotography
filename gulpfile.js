var gulp         = require('gulp');
var imageResize  = require('gulp-image-resize');
var webp         = require('gulp-webp');
var imagemin     = require('gulp-imagemin');
var newer        = require('gulp-newer');



// Optimizes and copies image files.
gulp.task('images', function() {
    return gulp.src('_photos/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('photos'))
});

// Optimizes and copies image files.
gulp.task('webp', function() {
    return gulp.src('_photos/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest('photos'))
});


// Optimizes and copies image files.
gulp.task('resize', function() {
    return gulp.src('_photos/*.jpg')
    .pipe(imageResize({
        width : 500,
        crop : false,
        upscale : false
      }))
    .pipe(webp())
    .pipe(gulp.dest('photos/resized'))
});
