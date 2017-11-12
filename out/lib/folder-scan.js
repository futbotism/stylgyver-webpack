"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var models_1 = require("./models");
var fs = require("fs");
var meta_generators_1 = require("./meta-generators");
var FolderScan = /** @class */ (function () {
    function FolderScan(source) {
        this.menu = [];
        this.meta = {};
        this.source = source;
    }
    FolderScan.prototype.performScan = function () {
        var _this = this;
        var foldersAndFiles = fs.readdirSync(this.source.path);
        foldersAndFiles.forEach(function (folderOrFileName, index) {
            if (!_this.shouldIgnore(folderOrFileName)) {
                var isFolder = false;
                var fullPath = _this.buildFilePath(folderOrFileName, isFolder);
                _this.activeFileParse = _this.instantiateFileByType(fullPath, folderOrFileName);
                _this.menu.push(_this.activeFileParse.getMenuItem());
                _this.meta[_this.activeFileParse.id] = _this.activeFileParse.buildFileMeta();
            }
        });
        var meta = new classes_1.FolderMeta(this.menu, this.meta);
        return meta;
    };
    FolderScan.prototype.shouldIgnore = function (folderOrFile) {
        var isModule = folderOrFile.includes('module.ts');
        var isIndex = folderOrFile.includes('index.ts');
        var isIgnore = this.source.folderToIgnore.find(function (folderOrFileToIgnore) { return folderOrFileToIgnore === folderOrFile; });
        return isModule || isIndex || isIgnore;
    };
    FolderScan.prototype.instantiateFileByType = function (folderOrFile, folderOrFileName) {
        switch (this.source.parseType) {
            case models_1.parseType.component:
                return new meta_generators_1.ComponentMetaGenerator(folderOrFile, folderOrFileName);
            case models_1.parseType.directive:
                // directiveMetaGenerator(folderOrFile);
                break;
            case models_1.parseType.service:
                // serviceMetaGenerator(folderOrFile);
                break;
            case models_1.parseType.pipe:
                // pipeMetaGenerator(folderOrFile);
                break;
            case models_1.parseType.model:
                // modelMetaGenerator(folderOrFile);
                break;
            default:
                process.exit(1);
                throw "parse type " + this.source.parseType + " was not recognized";
        }
    };
    FolderScan.prototype.buildFilePath = function (fileName, isFolder) {
        if (isFolder) {
            return this.source.path + "/" + fileName + "." + this.source.parseType + ".ts";
        }
        else {
            return this.source.path + "/" + fileName + "/" + fileName + "." + this.source.parseType + ".ts";
        }
    };
    return FolderScan;
}());
exports.FolderScan = FolderScan;
