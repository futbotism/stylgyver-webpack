"use strict";
exports.__esModule = true;
function getExamplesFromComments(comments) {
    var examples = [];
    comments.forEach(function (comment) {
        examples.push.apply(examples, comment.examples.map(function (e) { return e.code; }));
    });
    return examples;
}
exports.getExamplesFromComments = getExamplesFromComments;
