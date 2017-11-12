"use strict";
exports.__esModule = true;
function extractTypedVariable(line) {
    var regex = /(\w*?)\s?\:\s?(\w*[\[\]]*)/;
    var lineMatch = regex.exec(line);
    if (lineMatch) {
        return {
            name: lineMatch[1],
            type: lineMatch[2]
        };
    }
}
exports.extractTypedVariable = extractTypedVariable;
