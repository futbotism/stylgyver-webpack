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
var service_meta_1 = require("../meta/service-meta");
var base_file_1 = require("../base-file");
var ServiceFile = /** @class */ (function (_super) {
    __extends(ServiceFile, _super);
    function ServiceFile(path, sourceFile) {
        return _super.call(this, path, sourceFile) || this;
    }
    ServiceFile.prototype.buildFileMeta = function () {
        return new service_meta_1.ServiceMeta({
            id: this.id,
            title: this.title,
            properties: this.properties
        });
    };
    return ServiceFile;
}(base_file_1.BaseFile));
exports.ServiceFile = ServiceFile;
