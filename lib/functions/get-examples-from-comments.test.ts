import 'jest';
import { isEqual } from 'lodash';
import { getExamplesFromComments } from './';
import { testComment } from '../test/stubs/comment';

test('it should extract the examples from the comment object', () => {
  const result = getExamplesFromComments(testComment);
  const acceptableOutput = [
    testComment[0].examples[0].code,
    testComment[0].examples[1].code,
  ];
  expect(isEqual(result, acceptableOutput)).toEqual(true);
});
