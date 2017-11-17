"use strict";
exports.__esModule = true;
function getCodeFromComments(comments) {
    var examples = [];
    comments.forEach(function (comment) {
        examples.push.apply(examples, comment.examples.map(function (e) { return e.code; }));
    });
    console.log(examples);
    return examples;
}
exports.getCodeFromComments = getCodeFromComments;