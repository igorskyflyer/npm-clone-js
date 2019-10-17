![clone.js](https://github.com/igorskyflyer/clone.js/raw/master/assets/clone.js.png)

# npm('clone.js')

A NPM package wrapper around a lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects.

> Original repository, [clone.js](https://github.com/igorskyflyer/clone.js).

<br>

## Usage

### Install

```javascript
npm install --save clone-js
```

### Simple array copy

```javascript
const clone = require('clone-js')

let firstArray = [1, 2, 3]
let secondArray = clone(firstArray)

secondArray[0] = 5

console.log('firstArray => ', firstArray) // [1, 2, 3]
console.log('secondArray => ', secondArray) // [5, 2, 3]
```

### Complex array (array of objects)

```javascript
const clone = require('clone-js')

let firstArray = [
	{
		id: '103',
		name: 'Peter'
	},
	{
		id: '214',
		name: 'Eve'
	}
]
let secondArray = clone(firstArray)

secondArray[0].name = 'John'

console.log('firstArray => ', firstArray)
console.log('secondArray => ', secondArray)
```

### Simple object copy

```javascript
const clone = require('clone-js')

let firstStudent = {
	id: 103,
	name: 'Ben',
	classes: ['Maths', 'Science', 'English language']
}

let secondStudent = clone(firstStudent)

secondStudent.classes[0] = 'Psychology'

console.log('firstStudent => ', firstStudent)
console.log('secondStudent => ', secondStudent)
```

### Nested object copy

```javascript
const clone = require('clone-js')

let firstStudent = {
	id: 103,
	name: 'Ben',
	subjects: {
		groupDke: {
			science: 'B',
			maths: 'C'
		},
		groupOpe: {
			foo: 'bar'
		}
	}
}

let secondStudent = clone(firstStudent)

secondStudent.subjects.groupDke.maths = 'B'

console.log('firstStudent => ', firstStudent)
console.log('secondStudent => ', secondStudent)
```

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

### Benchmark

```shell
npm run benchmark
```
