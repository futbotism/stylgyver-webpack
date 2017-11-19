"use strict";
exports.__esModule = true;
require("jest");
var _1 = require("./");
describe('Extracting a Decorator name from a line', function () {
    test('should return the name of the @Input, @Output, @HostBinding, etc decorator', function () {
        expect(_1.getDecoratorFromLine('@Input() placeholder: string = "";')).toEqual('Input');
        expect(_1.getDecoratorFromLine('@Output() queryChanged = new EventEmitter<string>();')).toEqual('Output');
        expect(_1.getDecoratorFromLine('@HostBinding("class.minimalist") @Input() minimalist: boolean = false;')).toEqual('HostBinding');
        expect(_1.getDecoratorFromLine('@ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;')).toEqual('ContentChild');
        expect(_1.getDecoratorFromLine('@ContentChildren')).toEqual('ContentChildren');
    });
    test('should not return anything for non decorator lines', function () {
        expect(_1.getDecoratorFromLine('Input')).toBeUndefined();
        expect(_1.getDecoratorFromLine('Input')).toBeUndefined();
        expect(_1.getDecoratorFromLine('HostBinding')).toBeUndefined();
        expect(_1.getDecoratorFromLine('ContentChild')).toBeUndefined();
        expect(_1.getDecoratorFromLine('ContentChildren')).toBeUndefined();
    });
});
