<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-clone-js/main/media/clone.js.png" alt="Icon of clone.js" width="256" height="256">
  <h1>clone.js</h1>
</div>

<br>

<h4 align="center">
  🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🧬 Deep‑clones objects and arrays with full fidelity
- 🔁 Recursively copies nested structures without mutation
- 🛡️ Preserves original data while enabling safe edits
- 🧠 Smart handling of null and non‑object values
- 🧩 Works with mixed arrays, primitives, and objects
- ⚙️ Zero dependencies - drop‑in and lightweight
- 🚀 Ideal for state snapshots, undo systems, or sandboxing

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/clone
```

```bash
yarn add @igorskyflyer/clone
```

```bash
npm i @igorskyflyer/clone
```

<br>
<br>

## 🤹🏼 API

### Simple array copy

```javascript
import { clone } from '@igorskyflyer/clone'

const firstArray = [1, 2, 3]
const secondArray = clone(firstArray)

secondArray[0] = 5

console.log('firstArray => ', firstArray) // [1, 2, 3]
console.log('secondArray => ', secondArray) // [5, 2, 3]
```

### Complex array (array of objects)

```javascript
import { clone } from '@igorskyflyer/clone'

const firstArray = [
  {
    id: '103',
    name: 'Peter',
  },
  {
    id: '214',
    name: 'Eve',
  },
]
const secondArray = clone(firstArray)

secondArray[0].name = 'John'

console.log('firstArray => ', firstArray)
console.log('secondArray => ', secondArray)
```

### Simple object copy

```javascript
import { clone } from '@igorskyflyer/clone'

const firstStudent = {
  id: 103,
  name: 'Ben',
  classes: ['Maths', 'Science', 'English language'],
}

const secondStudent = clone(firstStudent)

secondStudent.classes[0] = 'Psychology'

console.log('firstStudent => ', firstStudent)
console.log('secondStudent => ', secondStudent)
```

### Nested object copy

```javascript
import { clone } from '@igorskyflyer/clone'

const firstStudent = {
  id: 103,
  name: 'Ben',
  subjects: {
    groupDke: {
      science: 'B',
      maths: 'C',
    },
    groupOpe: {
      foo: 'bar',
    },
  },
}

const secondStudent = clone(firstStudent)

secondStudent.subjects.groupDke.maths = 'B'

console.log('firstStudent => ', firstStudent)
console.log('secondStudent => ', secondStudent)
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-clone-js/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-clone-js/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/pathexists](https://www.npmjs.com/package/@igorskyflyer/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igorskyflyer/zep](https://www.npmjs.com/package/@igorskyflyer/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

[@igorskyflyer/valid-path](https://www.npmjs.com/package/@igorskyflyer/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igorskyflyer/my-file-path](https://www.npmjs.com/package/@igorskyflyer/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

[@igorskyflyer/recursive-readdir](https://www.npmjs.com/package/@igorskyflyer/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
