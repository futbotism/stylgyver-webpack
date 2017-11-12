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
var classes_1 = require("../classes");
var file_line_functions_1 = require("../file-line-functions");
var DirectiveMetaGenerator = /** @class */ (function (_super) {
    __extends(DirectiveMetaGenerator, _super);
    function DirectiveMetaGenerator(path) {
        var _this = _super.call(this, path) || this;
        _this.inputList = [];
        _this.outputList = [];
        _this.viewChildList = [];
        _this.viewChildrenList = [];
        _this.contentChildList = [];
        _this.contentChildrenList = [];
        _this.parseLines();
        return _this;
    }
    DirectiveMetaGenerator.prototype.parseLines = function () {
        var _this = this;
        this.lines.forEach(function (line) {
            if (line.includes('@Input')) {
                var p = file_line_functions_1.extractTypedVariable(line);
                if (p)
                    _this.inputList.push(p);
            }
            if (line.includes('@Output')) {
                var p = file_line_functions_1.extractTypedVariable(line);
                if (p)
                    _this.outputList.push(p);
            }
            if (line.includes('@ViewChild(')) {
                var p = file_line_functions_1.extractTypedVariable(line);
                if (p)
                    _this.viewChildList.push(p);
            }
            if (line.includes('@ViewChildren(')) {
                var p = file_line_functions_1.extractTypedVariable(line);
                if (p)
                    _this.viewChildrenList.push(p);
            }
            if (line.includes('@ContentChild(')) {
                var p = file_line_functions_1.extractTypedVariable(line);
                if (p)
                    _this.contentChildList.push(p);
            }
            if (line.includes('@ContentChildren(')) {
                var p = file_line_functions_1.extractTypedVariable(line);
                if (p)
                    _this.contentChildrenList.push(p);
            }
        });
    };
    DirectiveMetaGenerator.prototype.buildFileMeta = function () {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            examples: this.examples,
            inputList: this.inputList,
            outputList: this.outputList,
            viewChildList: this.viewChildList,
            viewChildrenList: this.viewChildrenList,
            contentChildList: this.contentChildList,
            contentChildrenList: this.contentChildrenList
        };
    };
    return DirectiveMetaGenerator;
}(classes_1.FileScan));
exports.DirectiveMetaGenerator = DirectiveMetaGenerator;
