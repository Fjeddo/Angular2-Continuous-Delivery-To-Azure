var gulp = require('gulp');
var ts = require('gulp-typescript');

var appDestFolder = 'app';

gulp.task('statics', function() {
    return gulp.src('scripts/**/*.html')
        .pipe(gulp.dest(appDestFolder));
});

gulp.task('transpile', function() {
    return gulp.src('scripts/**/*.ts')
        .pipe(ts({
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }))
        .pipe(gulp.dest(appDestFolder));
});

gulp.task('default', ['transpile', 'statics']);