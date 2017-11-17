import 'jest';
import { isEqual } from 'lodash';
import { getCodeFromComments } from '../functions/get-code-from-comments';
import { testComment } from '../test/stubs/comment';

test('it should extract the examples from the comment object', () => {
  const result = getCodeFromComments(testComment);
  const acceptableOutput = [
    testComment[0].examples[0].code,
    testComment[0].examples[1].code,
  ];
  expect(isEqual(result, acceptableOutput)).toEqual(true);
});
