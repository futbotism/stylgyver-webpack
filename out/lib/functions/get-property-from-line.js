"use strict";
exports.__esModule = true;
var models_1 = require("../models");
var index_1 = require("./index");
function getPropertyFromLine(line) {
    var regex = /(\w*?)\s?\:\s?(\w*[\[\]]*)/;
    var lineMatch = regex.exec(line);
    // HACK until the regex support @outputs
    if (line.includes('@Output')) {
        return new models_1.Property('OUTPUT_NAME', 'OUTPUT_TYPE', 'Output');
    }
    if (lineMatch) {
        var decorator = index_1.getDecoratorFromLine(line);
        var a = new models_1.Property(lineMatch[1], lineMatch[2], decorator);
        return a;
    }
}
exports.getPropertyFromLine = getPropertyFromLine;
