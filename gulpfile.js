// Imports Gerais
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
// Inports para o CSS
const cssmin = require('gulp-cssmin');
// Inports para o JavaScript
const uglify = require('gulp-uglify');

// Tarefas para o CSS
function tarefasCSS(cb){
    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //  O arquivo de saída será libs.min.css
        .pipe(gulp.dest('./dist/css'))
}
exports.styles = tarefasCSS

// Tarefas para o JavaScript
function tarefasJS(){
    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.css'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) //  O arquivo de saída será libs.min.js
        .pipe(gulp.dest('./dist/js'))
}
exports.scripts = tarefasJS