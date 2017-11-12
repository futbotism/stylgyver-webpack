"use strict";
exports.__esModule = true;
var classes_1 = require("../classes");
var models_1 = require("../models");
var glob = require("glob");
var meta_generators_1 = require("../meta-generators");
var FolderScan = /** @class */ (function () {
    function FolderScan(sourceOption) {
        this.menu = [];
        this.sourceOption = sourceOption;
        if (this.sourceOption.addMetaToArray) {
            this.meta = [];
        }
        else {
            this.meta = {};
        }
    }
    FolderScan.prototype.performScan = function () {
        var _this = this;
        var files = glob.sync(this.sourceOption.path + "/**/*." + this.sourceOption.parseType + ".ts", undefined);
        files.forEach(function (file, index) {
            if (!_this.shouldIgnore(file)) {
                _this.activeFileParse = _this.instantiateFileByType(file);
                _this.menu.push(_this.activeFileParse.getMenuItem());
                if (_this.sourceOption.addMetaToArray) {
                    _this.meta.push(_this.activeFileParse.buildFileMeta());
                }
                else {
                    _this.meta[_this.activeFileParse.id] = _this.activeFileParse.buildFileMeta();
                }
            }
        });
        return new classes_1.FolderMeta(this.menu, this.meta);
    };
    FolderScan.prototype.shouldIgnore = function (file) {
        var isModule = file.includes('module.ts');
        var isIndex = file.includes('index.ts');
        var isIgnore;
        if (this.sourceOption.folderToIgnore) {
            isIgnore = this.sourceOption.folderToIgnore.find(function (fileToIgnore) { return fileToIgnore === file; });
        }
        return isModule || isIndex || isIgnore;
    };
    FolderScan.prototype.instantiateFileByType = function (file) {
        switch (this.sourceOption.parseType) {
            case models_1.parseType.component:
                return new meta_generators_1.ComponentMetaGenerator(file);
            case models_1.parseType.directive:
                return new meta_generators_1.DirectiveMetaGenerator(file);
            case models_1.parseType.service:
                return new meta_generators_1.ServiceMetaGenerator(file);
            case models_1.parseType.pipe:
                return new meta_generators_1.PipeMetaGenerator(file);
            case models_1.parseType.model:
                return new meta_generators_1.ModelMetaGenerator(file);
            default:
                process.exit(1);
                throw "parse type " + this.sourceOption.parseType + " was not recognized";
        }
    };
    return FolderScan;
}());
exports.FolderScan = FolderScan;
