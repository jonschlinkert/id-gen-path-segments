/*!
 * id-gen-path-segments <https://github.com/jonschlinkert/id-gen-path-segments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var segments = require('../')({sep: '-'});
var IdGenerator = require('id-gen');
var renamer = new IdGenerator(segments);


var filepath = 'templates/foo/bar/baz/quux/zed.hbs';
var a = 'E:/Dropbox/Development/generate/utils/load-options-test/src/templates/partials/alert.hbs';
var b = 'E:/Dropbox/Development/generate/utils/load-options-test/src/templates/partials/modal.hbs';
var c = 'E:/Dropbox/Development/generate/utils/load-options-test/src/templates/partials/nav.hbs';
var d = 'E:/Dropbox/Development/generate/utils/load-options-test/src/templates/partials/tooltip.hbs';


describe('when foo is passed:', function () {

  it('should convert foo to bar.', function () {
    var actual = renamer.next(filepath);
    expect(actual).to.eql('baz-quux-zed');
  });

  it('should convert foo to bar.', function () {
    var actual = segments(a);
    expect(actual).to.eql('templates-partials-alert');
  });

  it('should convert foo to bar.', function () {
    var actual = segments(b);
    expect(actual).to.eql('templates-partials-modal');
  });

  it('should convert foo to bar.', function () {
    var actual = segments(c);
    expect(actual).to.eql('templates-partials-nav');
  });

  it('should convert foo to bar.', function () {
    var actual = segments(d);
    expect(actual).to.eql('templates-partials-tooltip');
  });
});
