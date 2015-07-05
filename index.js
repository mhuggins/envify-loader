var loaderUtils = require('loader-utils');

module.exports = function (source) {
  var done = this.async();
  var query = loaderUtils.parseQuery(this.query);
  var result = '';
  var stream;

  if (query.custom) {
    stream = require('envify/custom')(query.custom);
  } else {
    stream = require('envify')();
  }

  this.cacheable();

  stream.on('data', function (chunk) {
    result += chunk;
  })
  .on('end', function () {
    done(null, result);
  });

  stream.write(source);
  stream.end();
};
