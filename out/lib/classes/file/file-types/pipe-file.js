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
var base_file_1 = require("../base-file");
var pipe_meta_1 = require("../meta/pipe-meta");
var functions_1 = require("../../../functions");
var PipeFile = /** @class */ (function (_super) {
    __extends(PipeFile, _super);
    function PipeFile(path, sourceFile) {
        var _this = _super.call(this, path, sourceFile) || this;
        _this.examples = [];
        _this.examples = functions_1.getExamplesFromComments(_this.comments);
        _this.common.health.missingExample = _this.examples.length === 0;
        return _this;
    }
    PipeFile.prototype.buildFileMeta = function () {
        return new pipe_meta_1.PipeMeta(this.common, this.examples);
    };
    return PipeFile;
}(base_file_1.BaseFile));
exports.PipeFile = PipeFile;
