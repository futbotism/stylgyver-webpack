"use strict";
exports.__esModule = true;
var menu_item_1 = require("../menu-item");
var lodash_1 = require("lodash");
var comments = require('parse-comments');
var BaseFile = /** @class */ (function () {
    function BaseFile(filePath, sourceFile) {
        this.filePath = filePath;
        this.sourceFile = sourceFile;
        this.getDefaults();
    }
    BaseFile.prototype.getDefaults = function () {
        var regex = /[\w-]+\./;
        this.title = regex.exec(this.filePath)[0].replace('.', '');
        this.id = lodash_1.camelCase(this.title);
    };
    BaseFile.prototype.getMenuItem = function () {
        return new menu_item_1.MenuItem(this.title, this.id);
    };
    // parseComments() {
    //   this.comments.forEach((comment) => {
    //     this.examples = comment.examples;
    //     this.description = this.useLeadOrDescription(comment);
    //   });
    // }
    // useLeadOrDescription(comment) {
    //   return comment.lead === '' ? comment.description : comment.lead;
    // }
    BaseFile.prototype.buildFileMeta = function () { };
    return BaseFile;
}());
exports.BaseFile = BaseFile;
