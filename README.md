# Stylgyver!

Stylgyver is a plugin for webpack that generates documentation from your shared angular folder
[example and docs here!](https://futbotism.github.io/stylgyver-ng/)

## Install

`npm install stylgyver-webpack --save-dev`

## Import

`const StylgyverPlugin = require('../stylgyver-webpack');`

## Configure

```javascript
new StylgyverPlugin({
    outputPath: './src/app/styleguide/meta.json',
    sourceOptions: [{
        parseType: 'component',
        name: 'components',
        path: 'src/app/shared/components'
      },{
        name: 'models',
        parseType: 'model',
        path: 'src/app/shared/models',
        addMetaToArray: 'true'
      },{
        name: 'pipes',
        parseType: 'pipe',
        path: 'src/app/shared/pipes',
        addMetaToArray: 'true'
      },{
        name: 'directives',
        parseType: 'directive',
        path: 'src/app/shared/directives',
        addMetaToArray: 'true'
      }
    ]
  })
  ```
