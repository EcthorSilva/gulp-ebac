// Imports Gerais
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
// Inports para o CSS
const cssmin = require('gulp-cssmin');
// Inports para o JavaScript
const uglify = require('gulp-uglify');
// Inports para as imagens
const image = require('gulp-image');

// Tarefas para o CSS
function tarefasCSS(cb){
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './vendor/owl/css/owl.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './src/css/style.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //  O arquivo de saída será libs.min.css
        .pipe(gulp.dest('./dist/css'))
}
exports.styles = tarefasCSS

// Tarefas para o JavaScript
function tarefasJS(){
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery.mask.min.js',
            './src/js/custom.js'
        ])
        .pipe(concat('scripts.css'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) //  O arquivo de saída será libs.min.js
        .pipe(gulp.dest('./dist/js'))
}
exports.scripts = tarefasJS

function tarefasImage() {
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 16,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'));
}
exports.tarefasImage = tarefasImage