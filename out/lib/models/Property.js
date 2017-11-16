"use strict";
exports.__esModule = true;
var Property = /** @class */ (function () {
    function Property(name, type, decorator) {
        this.name = name;
        this.type = type;
        this.decorator = decorator;
        console.log(this);
    }
    return Property;
}());
exports.Property = Property;
