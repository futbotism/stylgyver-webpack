import { getPropertyFromLine } from './';
import 'jest';
import { Property } from '../models/index';

describe('Extracting a property from a line in a file', () => {

  test('should get a Property from a well typed line', () => {
    expect(getPropertyFromLine('@Input() property: string = "";')).toMatchObject(<Property>{
      decorator: 'Input',
      name: 'property',
      type: 'string',
    });
    expect(getPropertyFromLine(`@Input() placeholder: string = '';`)).toMatchObject(<Property>{
      decorator: 'Input',
      name: 'placeholder',
      type: 'string',
    });
    expect(getPropertyFromLine(`showSuggestions: boolean = false;`)).toMatchObject(<Property>{
      name: 'showSuggestions',
      type: 'boolean',
    });
  });

  test('shouldnt get a Property from poorly typed line', () => {
    expect(getPropertyFromLine(`placeholder: string = '';`)).not.toMatchObject(<Property>{
      decorator: 'Input',
      name: 'placeholder',
      type: 'string',
    });
    expect(getPropertyFromLine(`@Input() property = '';`)).toBeUndefined();
    expect(getPropertyFromLine(`showSuggestions = false;`)).toBeUndefined();
  });

});

