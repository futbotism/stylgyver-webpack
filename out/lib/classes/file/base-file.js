"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var comments = require("parse-comments");
var menu_item_1 = require("../menu-item");
var BaseFile = /** @class */ (function () {
    function BaseFile(filePath, sourceFile) {
        this.filePath = filePath;
        this.sourceFile = sourceFile;
        this.lines = require('fs').readFileSync(this.filePath, 'utf-8').split('\n').filter(Boolean);
        this.comments = (comments(require('fs').readFileSync(this.filePath, 'utf-8')));
        this.getDefaults();
    }
    BaseFile.prototype.getDefaults = function () {
        var regex = /[\w-]+\./; // TODO: move to constant folder
        var description = this.comments[0].lead;
        var title = regex.exec(this.filePath)[0].replace('.', '');
        var properties = undefined;
        var id = lodash_1.camelCase(title);
        this.common = {
            description: description,
            title: title,
            properties: properties,
            id: id
        };
    };
    BaseFile.prototype.getMenuItem = function () {
        return new menu_item_1.MenuItem(this.common.title, this.common.id);
    };
    BaseFile.prototype.buildFileMeta = function () { };
    return BaseFile;
}());
exports.BaseFile = BaseFile;
