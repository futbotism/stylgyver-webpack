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
var ServiceMetaGenerator = /** @class */ (function (_super) {
    __extends(ServiceMetaGenerator, _super);
    function ServiceMetaGenerator(path) {
        return _super.call(this, path) || this;
    }
    ServiceMetaGenerator.prototype.buildFileMeta = function () {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            examples: this.examples
        };
    };
    return ServiceMetaGenerator;
}(classes_1.FileScan));
exports.ServiceMetaGenerator = ServiceMetaGenerator;
