/*!
 * id-gen-renamer <https://github.com/jonschlinkert/id-gen-renamer>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(options) {
  options = options || {};
  options.num = options.num || 2;
  options.sep = options.sep || '/';
  options.cwd = options.cwd || process.cwd();

  return function rename (filepath) {
    var dir = path.relative(options.cwd, path.dirname(filepath));
    var segments = dir.split(/[\\\/]/);
    var len = segments.length;
    var last = segments.slice(len - options.num).join(options.sep);
    var ext = path.extname(filepath);
    if (filepath) {
      return [last, path.basename(filepath, ext)].join(options.sep);
    }
    return;
  }
};
