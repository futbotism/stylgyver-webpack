"use strict";
exports.__esModule = true;
function getDecoratorFromLine(line) {
    var regex = /(@[\w\-]+)/;
    var lineMatch = line.match(regex);
    if (lineMatch)
        return lineMatch[0].replace('@', '');
}
exports.getDecoratorFromLine = getDecoratorFromLine;
