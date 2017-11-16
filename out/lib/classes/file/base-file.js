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
        var _this = this;
        var regex = /[\w-]+\./;
        this.title = regex.exec(this.filePath)[0].replace('.', '');
        this.id = lodash_1.camelCase(this.title);
        this.comments.map(function (comment) {
            _this.description += comment.lead;
        });
    };
    BaseFile.prototype.getMenuItem = function () {
        return new menu_item_1.MenuItem(this.title, this.id);
    };
    BaseFile.prototype.buildFileMeta = function () { };
    return BaseFile;
}());
exports.BaseFile = BaseFile;
