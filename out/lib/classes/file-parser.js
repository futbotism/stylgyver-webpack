"use strict";
exports.__esModule = true;
var menu_item_1 = require("./menu-item");
var lodash_1 = require("lodash");
var FileScan = /** @class */ (function () {
    function FileScan(path, folderOrFileName) {
        this.path = path;
        this.id = lodash_1.camelCase(folderOrFileName);
        this.title = folderOrFileName.split('-').join(' ');
        this.lines = require('fs').readFileSync(path, 'utf-8').split('\n').filter(Boolean);
    }
    FileScan.prototype.getMenuItem = function () {
        return new menu_item_1.MenuItem(this.title, this.id);
    };
    FileScan.prototype.buildFileMeta = function () { };
    return FileScan;
}());
exports.FileScan = FileScan;
