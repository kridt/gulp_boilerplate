var { src, dest } = require("gulp");
var { reload } = require("gulp-connect")
var { init, write } = require("gulp-sourcemaps");
var clanCss = require("gulp-clean-css");
var sass = require("gulp-sass");

function processSass(){
    return src("./src/sass/**/*.scss")
    .pipe(init())
    .pipe(sass())
    .pipe(clanCss( {compatibility: "ie9"} ))
    .pipe(write("."))
    .pipe(dest("./dist/assets/css"))
    .pipe(reload());
}

module.exports = processSass;