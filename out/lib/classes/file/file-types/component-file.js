"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var functions_1 = require("../../../functions");
var base_file_1 = require("../base-file");
var component_meta_1 = require("../meta/component-meta");
var ComponentFile = /** @class */ (function (_super) {
    __extends(ComponentFile, _super);
    function ComponentFile(path, sourceFile) {
        var _this = _super.call(this, path, sourceFile) || this;
        _this.parseLines();
        return _this;
    }
    ComponentFile.prototype.parseLines = function () {
        this.properties = this.lines
            .map(function (line) { return functions_1.getPropertyFromLine(line); })
            .filter(function (property) { return property && property.decorator; });
        this.examples = this.comments.map(function (comment) { return comment.examples.map(function (example) { return example.code; }); });
    };
    ComponentFile.prototype.buildFileMeta = function () {
        return new component_meta_1.ComponentMeta({
            id: this.id,
            title: this.title,
            properties: this.properties,
            description: this.description
        }, this.examples);
    };
    return ComponentFile;
}(base_file_1.BaseFile));
exports.ComponentFile = ComponentFile;
