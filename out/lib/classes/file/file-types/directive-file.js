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
var directive_meta_1 = require("../meta/directive-meta");
var DirectiveFile = /** @class */ (function (_super) {
    __extends(DirectiveFile, _super);
    function DirectiveFile(path, sourceFile) {
        var _this = _super.call(this, path, sourceFile) || this;
        _this.parseLines();
        return _this;
    }
    DirectiveFile.prototype.parseLines = function () {
    };
    DirectiveFile.prototype.buildFileMeta = function () {
        return new directive_meta_1.DirectiveMeta(this.common);
    };
    return DirectiveFile;
}(base_file_1.BaseFile));
exports.DirectiveFile = DirectiveFile;
