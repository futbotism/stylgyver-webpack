"use strict";
exports.__esModule = true;
var glob = require("glob");
var classes_1 = require("../classes");
var models_1 = require("../models");
var file_1 = require("./file");
var FolderScan = /** @class */ (function () {
    function FolderScan(sourceOption) {
        this.menu = [];
        this.sourceOption = sourceOption;
        this.meta = this.sourceOption.addMetaToArray ? [] : {};
    }
    FolderScan.prototype.performScan = function () {
        // const ast = new tsSimpleAst();
        // ast.addSourceFiles('**/*.ts');
        var _this = this;
        var globPath = this.sourceOption.path + "/**/*." + this.sourceOption.parseType + ".ts";
        var files = glob.sync(globPath, undefined);
        files.forEach(function (filePath, index) {
            if (!_this.shouldIgnore(filePath)) {
                var sourceFile = undefined; // ast.getSourceFile(filePath);
                _this.activeFile = _this.instantiateFileByType(filePath, sourceFile);
                _this.menu.push(_this.activeFile.getMenuItem());
                _this.appendMeta();
            }
        });
        return new classes_1.FolderMeta(this.menu, this.meta);
    };
    FolderScan.prototype.appendMeta = function () {
        if (this.sourceOption.addMetaToArray) {
            this.meta.push(this.activeFile.buildFileMeta());
        }
        else {
            this.meta[this.activeFile.id] = this.activeFile.buildFileMeta();
        }
    };
    FolderScan.prototype.shouldIgnore = function (filePath) {
        var isModule = filePath.includes('module.ts');
        var isIndex = filePath.includes('index.ts');
        var isIgnore;
        if (this.sourceOption.folderToIgnore) {
            isIgnore = this.sourceOption.folderToIgnore.find(function (filePathToIgnore) { return filePathToIgnore === filePath; });
        }
        return isModule || isIndex || isIgnore;
    };
    FolderScan.prototype.instantiateFileByType = function (filePath, sourceFile) {
        switch (this.sourceOption.parseType) {
            case models_1.parseType.component:
                return new file_1.ComponentFile(filePath, sourceFile);
            case models_1.parseType.directive:
                return new file_1.DirectiveFile(filePath, sourceFile);
            case models_1.parseType.service:
                return new file_1.ServiceFile(filePath, sourceFile);
            case models_1.parseType.pipe:
                return new file_1.PipeFile(filePath, sourceFile);
            case models_1.parseType.model:
                return new file_1.ModelFile(filePath, sourceFile);
            default:
                // process.exit(1);
                throw "parse type " + this.sourceOption.parseType + " was not recognized";
        }
    };
    return FolderScan;
}());
exports.FolderScan = FolderScan;
