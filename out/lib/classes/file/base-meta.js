"use strict";
exports.__esModule = true;
var BaseMeta = /** @class */ (function () {
    function BaseMeta(baseOptions) {
        this.id = baseOptions.id;
        this.title = baseOptions.title;
        this.properties = baseOptions.properties;
        console.log(this);
    }
    return BaseMeta;
}());
exports.BaseMeta = BaseMeta;
