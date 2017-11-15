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
var base_meta_1 = require("../base-meta");
var ServiceMeta = /** @class */ (function (_super) {
    __extends(ServiceMeta, _super);
    function ServiceMeta(baseOptions) {
        return _super.call(this, baseOptions) || this;
    }
    return ServiceMeta;
}(base_meta_1.BaseMeta));
exports.ServiceMeta = ServiceMeta;
