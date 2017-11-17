/* tslint:disable:max-line-length */

import { Comment } from '../../models';

export const testComment: Comment[] = [{
  subheads: ['Example usage'],
  description: '\n\n```js\nverb.src(\'src/*.hbs\', {layout: \'default\'});\n```\n\n**Example usage**\n\n```js\nverb.task(\'site\', function() {\n  verb.src(\'src/*.hbs\', {layout: \'default\'})\n    verb.dest(\'dist\');\n});\n```',
  param: ['{String|Array} `glob` Glob patterns or file paths to source files.', '{Object} `options` Options or locals to merge into the context and/or pass to `src` plugins'],
  api: 'public',
  params: [{
    type: 'String|Array',
    name: 'glob',
    description: 'Glob patterns or file paths to source files.',
  }, {
    type: 'Object',
    name: 'options',
    description: 'Options or locals to merge into the context and/or pass to `src` plugins',
  },
  ],
  comment: {
    begin: 2,
    end: 21,
    code: 'Verb.prototype.src = function(glob, opts) {',
    content: 'Read in source files from file paths or glob patterns.\n\n```js\nverb.src(\'src/*.hbs\', {layout: \'default\'});\n```\n\n**Example usage**\n\n```js\nverb.task(\'site\', function() {\n  verb.src(\'src/*.hbs\', {layout: \'default\'})\n    verb.dest(\'dist\');\n});\n```\n\n@param {String|Array} `glob` Glob patterns or file paths to source files.\n@param {Object} `options` Options or locals to merge into the context and/or pass to `src` plugins\n@api public\n',
    codeStart: 23,
  },
  context: {
    begin: 23,
    type: 'prototype method',
    class: 'Verb',
    name: 'src',
    params: ['glob', 'opts'],
    string: 'Verb.prototype.src()',
    original: 'Verb.prototype.src = function(glob, opts) {',
  },
  heading: { level: 2, text: 'src', prefix: '.' },
  lead: 'Read in source files from file paths or glob patterns.',
  name: 'src',
  examples: [{
    lang: 'js',
    code: 'verb.src(\'src/*.hbs\', {layout: \'default\'});',
    block: '```js\nverb.src(\'src/*.hbs\', {layout: \'default\'});\n```',
  }, {
    lang: 'js',
    code: 'verb.task(\'site\', function() {\n  verb.src(\'src/*.hbs\', {layout: \'default\'})\n    verb.dest(\'dist\');\n});',
    block: '```js\nverb.task(\'site\', function() {\n  verb.src(\'src/*.hbs\', {layout: \'default\'})\n    verb.dest(\'dist\');\n});\n```',
  }],
}]
  ;
