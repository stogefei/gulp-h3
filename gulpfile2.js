//css 打包
var gulp = require('gulp'), //本地安装gulp所用到的地方
    concat = require('gulp-concat'),//合并文件 --合并只是放一起--压缩才会真正合并相同样式
    uglify = require('gulp-uglify');
    less = require('gulp-less'),//编译less文件
    cssmin = require('gulp-minify-css'),//压缩css文件
    rename = require('gulp-rename'),//设置压缩后的文件名
    autoprefixer = require('gulp-autoprefixer'),//给 CSS 增加前缀。解决某些CSS属性不是标准属性，有各种浏览器前缀的情况
     spriter=require('gulp-css-spriter');//合并图片
     
//编译/加前缀 /合并/压缩css
gulp.task('default', function () {
    return gulp.src('css/*.css') //需要打包的css文件目录（gulp流的源头）
    .pipe(concat('style.css')) //通过concat将css文件拼接成一个叫做style.css的文件
    .pipe(cssmin()) //通过cssmin将上一步骤生产出的style.css去掉中间的空白，使他变成压缩格式
    .pipe(rename({
        suffix: '.min' //rename只是给上一步骤产出的压缩的styles.css重命名为style.min.css
    }))
    .pipe(gulp.dest('build/css')) //dest方法把上一步骤产出的style.min.css输出到“./dist/css”目录下（gulp流的终点）
});  
