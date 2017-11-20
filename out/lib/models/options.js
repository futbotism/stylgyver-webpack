"use strict";
exports.__esModule = true;
exports.parseType = {
    component: 'component',
    directive: 'directive',
    service: 'service',
    pipe: 'pipe',
    model: 'model'
};
var DefaultOptions = /** @class */ (function () {
    function DefaultOptions(options) {
        console.log(options);
        if (typeof options.outputPath === 'undefined') {
            throw 'options.outputPath is not defined';
        }
        this.outputPath = options.outputPath;
        this.sourceOptions = options.sourceOptions;
    }
    return DefaultOptions;
}());
exports.DefaultOptions = DefaultOptions;
