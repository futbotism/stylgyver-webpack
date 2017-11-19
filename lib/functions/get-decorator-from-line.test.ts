import 'jest';

import { getDecoratorFromLine } from './';
import { testComment } from '../test/stubs/comment';

describe('Extracting a Decorator name from a line', () => {
  
  test('should return the name of the @Input, @Output, @HostBinding, etc decorator', () => {

    expect(getDecoratorFromLine('@Input() placeholder: string = "";')).toEqual('Input');
    expect(getDecoratorFromLine('@Output() queryChanged = new EventEmitter<string>();')).toEqual('Output');
    expect(getDecoratorFromLine('@HostBinding("class.minimalist") @Input() minimalist: boolean = false;')).toEqual('HostBinding');
    expect(getDecoratorFromLine('@ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;')).toEqual('ContentChild');
    expect(getDecoratorFromLine('@ContentChildren')).toEqual('ContentChildren');

  });
  
  test('should not return anything for non decorator lines', () => {
    expect(getDecoratorFromLine('Input')).toBeUndefined();
    expect(getDecoratorFromLine('Input')).toBeUndefined();
    expect(getDecoratorFromLine('HostBinding')).toBeUndefined();
    expect(getDecoratorFromLine('ContentChild')).toBeUndefined();
    expect(getDecoratorFromLine('ContentChildren')).toBeUndefined();
  });

});
