# @inker/eslint-config-typescript

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation

```sh
npm i -D @inker/eslint-config-typescript
```

## Usage

Requires ESLint 10.4 or later. In `eslint.config.js`:

```js
import inker from "@inker/eslint-config-typescript";

export default [...inker];
```

It reads `./tsconfig.json` relative to `parserOptions.tsconfigRootDir`, so set that to the project root if ESLint can run from another folder.
For React, add `@inker/eslint-config/react` as described in the [@inker/eslint-config README](https://github.com/inker/eslint-config#readme).

## Notes

It is recommended that no other settings apart from the ones above be changed. Any changes are up for discussion.

[npm-url]: https://npmjs.org/package/@inker/eslint-config-typescript
[downloads-image]: http://img.shields.io/npm/dm/@inker/eslint-config-typescript.svg
[npm-image]: http://img.shields.io/npm/v/@inker/eslint-config-typescript.svg
[david-dm-url]: https://david-dm.org/inker/@inker/eslint-config-typescript
[david-dm-image]: https://david-dm.org/inker/@inker/eslint-config-typescript.svg
[david-dm-dev-url]: https://david-dm.org/inker/@inker/eslint-config-typescript#info=devDependencies
[david-dm-dev-image]: https://david-dm.org/inker/@inker/eslint-config-typescript/dev-status.svg
