var sass = require('node-sass');
var importOnce = require('node-sass-import-once');

sass.render({
  file: './test/_test.scss',
  importer: importOnce,
  importOnce: {
    index: false,
    css: true,
    bower: true
  },
  includePaths: [
    './stylesheets/',
    '/Users/yoannis/Workshop/Projects/Sass/Aleksi/stylesheets/',
    '/Users/yoannis/Workshop/Projects/Sass/Aleksi/bower_components/SassyLists/stylesheets/'
  ]
}, function(err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log('rendered sass files successfully!');
  }
});