/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const { src, dest,series, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
/*
const jsFiles = [
  './js/global.init.js',
  './js/global.utils.js',
  './js/global.forms.js',
  './js/global.form.realization.js',
  './js/functions.js',
  './js/base.js'
];
*/
function first(done) {
    console.log('Preved');
        stylesCompile();
	copyBootstrapFonts();
	copyLocalFonts();
    done();
}
function copyBootstrapFonts() {
	const outputPath = './web/themes/agrosalon/bootstrap/assets/fonts/bootstrap/*';
	const destination = './web/themes/agrosalon/fonts/bootstrap';
	return src(outputPath)
		.pipe(dest(destination));	
}
function copyLocalFonts() {
	const outputPath = './web/themes/agrosalon/assets/fonts/*';
	const destination = './web/themes/agrosalon/fonts/';
	return src(outputPath)
		.pipe(dest(destination));	
}

/*
function moveJs() {
    return src(jsFiles)
            .pipe(concat('main.js'))
            //.pipe(rename({ extname : '.min.js'}))
            .pipe(dest('../web/js/'));
}
*/
function stylesCompile() {
    return src('./web/themes/agrosalon/assets/styles/style.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(dest("./web/themes/agrosalon/css"));  
    
}
function watches() {
watch('./web/themes/agrosalon/assets/styles/**/*.scss',{events: 'all' },function(done){
        stylesCompile();
        done();
    });
//
//watch('./js/**/*.js',{events: 'all' },function(done){
//    moveJs();
//    done();
//});
}
exports.default = watches;
    
/*
 * 
exports.default = series (
        move,
        stylesCompile
        );*/
        exports.first = first;
        //exports.move = move;

