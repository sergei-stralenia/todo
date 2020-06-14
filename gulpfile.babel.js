import gulp from 'gulp';
import babel from 'gulp-babel';
import transform from 'vinyl-transform';
import browserify from 'browserify';

exports.default = (cb) => {
  const browserified = () => {
    console.log('file');
    browserify({ 
      entries: './build/index.js',
      debug: true,
    });
    cb();
  };

  gulp.src('./index.js')
    .pipe(babel({
			presets: ['@babel/preset-env', '@babel/preset-react']
    }))
    .pipe(gulp.dest('build'))
    .on('end', browserified);
};
