"use strict";
var models_1 = require("./lib/models");
var classes_1 = require("./lib/classes");
var fs = require("fs");
var StyleGyverPlugin = /** @class */ (function () {
    function StyleGyverPlugin(options) {
        this.styleguide = {};
        this.options = new models_1.DefaultOptions(options); // Todo add a check to ensure all correct options are defined and set
    }
    StyleGyverPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.plugin('done', function () {
            _this.buildStyleguide();
        });
    };
    StyleGyverPlugin.prototype.buildStyleguide = function () {
        var _this = this;
        this.options.sourceOptions.map(function (sourceOption) {
            var folderScan = new classes_1.FolderScan(sourceOption);
            _this.styleguide[sourceOption.name] = folderScan.performScan();
        });
        var t;
        try {
            t = JSON.parse(fs.readFileSync(this.options.outputPath, 'utf8'));
        }
        catch (_a) {
            t = {};
        }
        if (JSON.stringify(this.styleguide) !== JSON.stringify(t)) {
            fs.writeFile(this.options.outputPath, JSON.stringify(this.styleguide, null, 2), 'utf-8', function () {
                // tslint:disable-next-line:no-console
                console.info('The styleguide has been generated 🎨');
            });
        }
    };
    return StyleGyverPlugin;
}());
module.exports = StyleGyverPlugin;
