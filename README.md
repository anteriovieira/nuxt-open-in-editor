# nuxt-open-in-editor
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-open-in-editor/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-open-in-editor)
[![npm](https://img.shields.io/npm/dt/nuxt-open-in-editor.svg?style=flat-square)](https://npmjs.com/package/nuxt-open-in-editor)
[![CircleCI](https://img.shields.io/circleci/project/github/anteriovieira/nuxt-open-in-editor.svg?style=flat-square)](https://circleci.com/gh/anteriovieira/nuxt-open-in-editor)
[![Codecov](https://img.shields.io/codecov/c/github/anteriovieira/nuxt-open-in-editor.svg?style=flat-square)](https://codecov.io/gh/anteriovieira/nuxt-open-in-editor)
[![Dependencies](https://david-dm.org/anteriovieira/nuxt-open-in-editor/status.svg?style=flat-square)](https://david-dm.org/anteriovieira/nuxt-open-in-editor)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Nuxt server middleware to open any file in an editor by request to defined route.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup
- Add `nuxt-open-in-editor` dependency using yarn or npm to your project
- Add `nuxt-open-in-editor` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-open-in-editor',

    // With options
    ['nuxt-open-in-editor', { /* module options */ }],
 ]
}
```

### Options

| Option  | Type | Default  | Info |
| ------------- | ------------- | ------------- | ------------- |
| path  | `String|null` | `/_open` | To trigger middleware on *any* request method to `/_open` |
| editor | `String|null` | `code` | Editor to open a file |
| cmd | `String|null` | `null` | Command to launch an editor |
| pattern | `String|null` | `null` | Option to specify arguments for a command |
| line | `Number` | `1` | Defines the number of the first line in the editor |
| column | `Number` | `1` | Defines the number of the first column in the editor |

### Supported editors

- sublime – Sublime Text
- atom – Atom Editor
- code – Visual Studio Code
- webstorm – WebStorm
- phpstorm - PhpStorm
- idea14ce – IDEA 14 CE
- vim – Vim (via Terminal, Mac OS only)
- emacs – Emacs (via Terminal, Mac OS only)
- visualstudio – Visual Studio

## Usage

Module Description

## License

[MIT License](./LICENSE)

Copyright (c) Antério Vieira <anteriovieira@gmail.com>
