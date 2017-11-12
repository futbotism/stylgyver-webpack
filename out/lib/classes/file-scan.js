"use strict";
exports.__esModule = true;
var menu_item_1 = require("./menu-item");
var lodash_1 = require("lodash");
var comments = require('parse-comments');
var FileScan = /** @class */ (function () {
    function FileScan(path) {
        // Line parse switches
        this.getInputFromLines = false;
        this.getOutputFromLines = false;
        this.path = path;
        this.getDefaults();
        this.parseComments();
    }
    FileScan.prototype.getDefaults = function () {
        var regex = /[\w-]+\./;
        this.title = regex.exec(this.path)[0].replace('.', '');
        this.id = lodash_1.camelCase(this.title);
        this.lines = require('fs').readFileSync(this.path, 'utf-8').split('\n').filter(Boolean);
        this.comments = (comments(require('fs').readFileSync(this.path, 'utf-8')));
    };
    FileScan.prototype.getMenuItem = function () {
        return new menu_item_1.MenuItem(this.title, this.id);
    };
    FileScan.prototype.parseComments = function () {
        var _this = this;
        this.comments.forEach(function (comment) {
            _this.examples = comment.examples;
            _this.description = _this.useLeadOrDescription(comment);
        });
    };
    FileScan.prototype.useLeadOrDescription = function (comment) {
        return comment.lead === '' ? comment.description : comment.lead;
    };
    FileScan.prototype.buildFileMeta = function () { };
    return FileScan;
}());
exports.FileScan = FileScan;
