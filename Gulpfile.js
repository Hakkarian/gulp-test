import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import inject from 'gulp-inject';

gulp.task("html", () =>
  gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
);

gulp.task("images", () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"))
);

gulp.task("desk-images", () =>
  gulp.src("src/images/desktop/*").pipe(imagemin()).pipe(gulp.dest("dist/images/desktop"))
);

gulp.task("inject", () =>
    gulp
        .src("src/*.html")
        .pipe(
            inject(gulp.src(["dist/css/*.css", "dist/js/*.js"], { read: false }), {
                relative: true,
            }).pipe(gulp.dest('dist'))
    )
);

gulp.task('default', gulp.series('html', 'images', "desk-images", 'inject'));