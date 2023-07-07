const gulp = require('gulp');
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require('sass'));
const cleanCSS = require('gulp-clean-css');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');

gulp.task("html", () =>
  gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
);

gulp.task("scss", () => gulp.src("src/scss/**/*.scss").pipe(sass().on('error', sass.logError)).pipe(gulp.dest("dist/css")));
gulp.task("mincss", () => gulp.src("dist/css/**/*.css").pipe(cleanCSS()).pipe(gulp.dest('dist/css')));

gulp.task("css", (done) => gulp.series("scss", "mincss")(done))
gulp.task('babel', () => gulp.src("src/ts/**/*.ts").pipe(ts()).pipe(babel()).pipe(uglify()).pipe(gulp.dest("dist/js")));

gulp.task("images", () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"))
);

gulp.task("desk-images", () =>
  gulp.src("src/images/desktop/*").pipe(imagemin()).pipe(gulp.dest("dist/images/desktop"))
);

gulp.task('watch', () => {
  gulp.watch("src/*.html", gulp.series("html"));
  gulp.watch("src/**/*.scss", gulp.series("css"));
  gulp.watch("src/**/*.ts", gulp.series("babel"));
  gulp.watch("src/images/*", gulp.series("images"));
  gulp.watch("src/images/desktop/*", gulp.series("desk-images"));
})

gulp.task('default', gulp.series("watch"));