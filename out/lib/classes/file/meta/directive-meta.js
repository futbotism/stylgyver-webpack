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
var DirectiveMeta = /** @class */ (function (_super) {
    __extends(DirectiveMeta, _super);
    function DirectiveMeta(common, examples) {
        var _this = _super.call(this, common) || this;
        _this.examples = examples;
        _this.health.missingExample = _this.examples.length === 0;
        return _this;
    }
    return DirectiveMeta;
}(base_meta_1.BaseMeta));
exports.DirectiveMeta = DirectiveMeta;
