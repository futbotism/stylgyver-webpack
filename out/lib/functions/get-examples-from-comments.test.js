"use strict";
exports.__esModule = true;
require("jest");
var lodash_1 = require("lodash");
var _1 = require("./");
var comment_1 = require("../test/stubs/comment");
test('it should extract the examples from the comment object', function () {
    var result = _1.getExamplesFromComments(comment_1.testComment);
    var acceptableOutput = [
        comment_1.testComment[0].examples[0].code,
        comment_1.testComment[0].examples[1].code,
    ];
    expect(lodash_1.isEqual(result, acceptableOutput)).toEqual(true);
});
