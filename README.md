![clone.js](https://github.com/igorskyflyer/npm-clone-js/raw/main/assets/clone.js.png)

🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁

# npm('clone.js')

<br>
<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/node-clone-js"
```

<br>

## 🤹🏼 API


### Simple array copy

```javascript
import { clone } from '@igor.dvlpr/node-clone-js'

const firstArray = [1, 2, 3]
const secondArray = clone(firstArray)

secondArray[0] = 5

console.log('firstArray => ', firstArray) // [1, 2, 3]
console.log('secondArray => ', secondArray) // [5, 2, 3]
```

### Complex array (array of objects)

```javascript
import { clone } from '@igor.dvlpr/node-clone-js'

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
import { clone } from '@igor.dvlpr/node-clone-js'

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
import { clone } from '@igor.dvlpr/node-clone-js'

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

---

### Development

```shell
git clone https://github.com/igorskyflyer/npm-clone-js.git

cd npm-clone-js

npm install
```

### Test

```shell
npm test
```

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-clone-js/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/pathexists](https://www.npmjs.com/package/@igor.dvlpr/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

[@igor.dvlpr/zep](https://www.npmjs.com/package/@igor.dvlpr/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

[@igor.dvlpr/valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

[@igor.dvlpr/my-file-path](https://www.npmjs.com/package/@igor.dvlpr/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

[@igor.dvlpr/recursive-readdir](https://www.npmjs.com/package/@igor.dvlpr/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_
