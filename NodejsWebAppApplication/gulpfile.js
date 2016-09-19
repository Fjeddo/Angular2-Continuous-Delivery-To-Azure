var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function() {
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
        .pipe(gulp.dest('app'));
});