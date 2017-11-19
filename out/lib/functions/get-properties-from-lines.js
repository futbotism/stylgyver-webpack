"use strict";
exports.__esModule = true;
var _1 = require("./");
function getPropertiesFromLines(lines) {
    return lines
        .map(function (line) { return _1.getPropertyFromLine(line); })
        .filter(function (property) { return property && property.decorator; });
}
exports.getPropertiesFromLines = getPropertiesFromLines;
