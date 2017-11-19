"use strict";
exports.__esModule = true;
var _1 = require("./");
require("jest");
describe('Extracting a property from a line in a file', function () {
    test('should get a Property from a well typed line', function () {
        expect(_1.getPropertyFromLine('@Input() property: string = "";')).toMatchObject({
            decorator: 'Input',
            name: 'property',
            type: 'string'
        });
        expect(_1.getPropertyFromLine("@Input() placeholder: string = '';")).toMatchObject({
            decorator: 'Input',
            name: 'placeholder',
            type: 'string'
        });
        expect(_1.getPropertyFromLine("showSuggestions: boolean = false;")).toMatchObject({
            name: 'showSuggestions',
            type: 'boolean'
        });
    });
    test('shouldnt get a Property from poorly typed line', function () {
        expect(_1.getPropertyFromLine("placeholder: string = '';")).not.toMatchObject({
            decorator: 'Input',
            name: 'placeholder',
            type: 'string'
        });
        expect(_1.getPropertyFromLine("@Input() property = '';")).toBeUndefined();
        expect(_1.getPropertyFromLine("showSuggestions = false;")).toBeUndefined();
    });
});
