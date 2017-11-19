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
var model_meta_1 = require("../meta/model-meta");
var ModelFile = /** @class */ (function (_super) {
    __extends(ModelFile, _super);
    function ModelFile(path, sourceFile) {
        var _this = _super.call(this, path, sourceFile) || this;
        _this.parseLines();
        return _this;
    }
    ModelFile.prototype.parseLines = function () {
        this.common.properties = this.lines.map(function (line) { return functions_1.getPropertyFromLine(line); }).filter(function (e) { return e; });
        this.common.health.missingProperties = this.common.properties.length === 0;
    };
    ModelFile.prototype.buildFileMeta = function () {
        return new model_meta_1.ModelMeta(this.common);
    };
    return ModelFile;
}(base_file_1.BaseFile));
exports.ModelFile = ModelFile;
