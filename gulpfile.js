// js打包
var gulp = require('gulp');
// var order = require("gulp-order");
// var coffee = require("gulp-coffee");
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var babel = require('gulp-babel');
// gulp.task('default',function() {
//   gulp.src("form/*.js")      // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
//       .pipe(concat('MvcSheetAll.js'))   //合并成的js文件名称
//       .pipe(uglify())            //压缩
//       .pipe(gulp.dest('build'));    //打包压缩在build目录下。
// });
gulp.task('default', async() => {
  await gulp.src("form/*.js")      // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
            // .pipe(babel())
            .pipe(concat('MvcSheetControls.js'))   //合并成的js文件名称
            // .pipe(uglify()) //压缩
            .pipe(gulp.dest('build'));    //打包压缩在build目录下。
});
// gulp.task('default',function() {
//   gulp
//     .src("form/*.js")
//     .pipe(order([
//       "form/SheetControls.js",
//       "form/MvcSheetUI.js",
//       "form/MvcSheet.js",
//       "form/*.js"
//     ]))
//     .pipe(concat("MvcSheetAll.js"))
//     // .pipe(uglify())
//     .pipe(gulp.dest("dist"));
// });