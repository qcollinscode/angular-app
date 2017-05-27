/**
 * Imported modules
 */
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import bs from 'browser-sync';
import minifyCss from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import minifyJs from 'gulp-minify';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import watch from 'gulp-watch';
import merge from 'merge-stream';
import jsConcat from 'gulp-concat';
import cssConcat from 'gulp-concat-css';
import del from 'del';
import nodemon from 'gulp-nodemon';

/**
 * Variables
 */
const browsersync = bs.create();
const reload = bs.reload;


/**
 * Styles Task
 */
gulp.task("styles", () => {
  return watch('public/css/stylesheets/*.css', () => {
    gulp.src(['public/css/stylesheets/tether.min.css', 'public/css/stylesheets/bootstrap.min.css', 'public/css/stylesheets/main.css'])
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(cssConcat("main.css"))
    // .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))
    .pipe(browsersync.reload({stream: true}));
  });
});

/**
 * Images Task
 */
gulp.task('images', () => {
  return watch('public/images/dev/**/*', () => {
    /*del(["public/images"]).then(paths => {
      console.log('Deleted files and folder:=\n', paths.join('\n'));
    });*/
    gulp.src('public/images/dev/**/*')
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(plumber())
      .pipe(gulp.dest('public/images'))
      .pipe(browsersync.reload({stream: true}));
  });
});

/**
 * HTML Task
 */
gulp.task('html', () => {
  return watch('public/**/*.html', () => {
    gulp.src('public/**/*.html')
      .pipe(browsersync.reload({stream: true}));
  });
});

/**
 * Scripts Task
 */
gulp.task('scripts', () => {
  return watch(['public/js/dev/*.js', 'public/app/*.js'], () => {
    gulp.src(['public/js/dev/jquery.min.js', 'public/js/dev/tether.min.js', 'public/js/dev/bootstrap.min.js', 'public/js/dev/angular.min.js', 'public/app/app.js'])
    .pipe(plumber())
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    .pipe(jsConcat('main.js'))
    .pipe(rename({
      extname: '.js'
    }))
    // .pipe(minifyJs({
    //   ext:{
    //     min:'.js'
    //   },
    //   noSource: false
    // }))
    .pipe(gulp.dest('public/js'))
    .pipe(browsersync.reload({stream: true}));
  })
});

/**
 * remove build folder
 */
gulp.task("removeBuild", () => {
  return del([
    "build"
  ]);
});

/**
 * Build a new public folder
 */
gulp.task("transferFiles", ["removeBuild"], () => {
  return gulp.src([
    './**'
  ])
    .pipe(plumber())
    .pipe(gulp.dest('build'));
});

/**
 * Replace all dev files with production files
 */
gulp.task("cleanBuild", ["transferFiles"], () => {
 return del([
    "build/bower_components/**",
    "build/node_modules/**",
    "build/bower.json",
    "build/gulpfile.babel.js",
    "build/.babelrc",
    "build/build/**",
    "build/public/css/.sass-cache/**",
    "build/public/css/sass/**",
    "build/public/css/stylesheets/**",
    "build/public/css/config.rb",
    "build/public/images/dev/**",
    "build/public/js/dev/**"
  ]);
});

gulp.task('build', ["cleanBuild"]);


/**
 * Gulp Nodemon
 */
gulp.task('nodemon', function(cb) {
    var started = false;

    return nodemon({
        script: 'app.js',
        ignore: [
          'gulpfile.babel.js',
          'node_modules/',
          'bower_components/',
          'public/**/*.js'
        ],
        ext: 'js ejs',
        env: {
          'NODE_ENV': 'development',
          'DEBUG': 'appname:*'
        }
    }).on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    }).on("restart", function () {
      setTimeout(function () {
        console.log("hit");
        browsersync.reload();
      }, 1000);
    });
});


/**
 * Browser-Sync Task
 */
gulp.task('browser-sync',['nodemon'], () => {
  browsersync.init(null, {
      /*baseDir: "./public/"*/
      proxy: 'http://localhost:3000',
      // server: {
      //   baseDir: "./public/"
      // },
      port: "3333"
  });
});

gulp.task('default', ["html", "styles", "scripts", "images", "browser-sync"]);