"use strict";
exports.__esModule = true;
var models_1 = require("../models");
function getPropertyFromLine(line) {
    var regex = /(\w*?)\s?\:\s?(\w*[\[\]]*)/;
    var lineMatch = regex.exec(line);
    var decorator = line.includes('@') ? findDecorator(line) : undefined;
    if (lineMatch) {
        return new models_1.Property(lineMatch[1], lineMatch[2], decorator);
    }
}
exports.getPropertyFromLine = getPropertyFromLine;
function findDecorator(line) {
    if (line.includes('@Input'))
        return 'Input';
    if (line.includes('@Output'))
        return 'Output';
    if (line.includes('@HostBinding'))
        return 'HostBinding';
    if (line.includes('@ContentChild'))
        return 'ContentChild';
    if (line.includes('@ContentChildren'))
        return 'ContentChildren';
}
exports.findDecorator = findDecorator;
