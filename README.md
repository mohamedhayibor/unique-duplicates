unique-duplicates ![](https://img.shields.io/badge/status-stable-green.svg)
----
This module returns the unique values of duplicates within an array. Use it only for number and string types to be safe from edge cases.

## Installation
```
  > npm install unique-duplicates
```

## Usage

```js
import uniqueDuplicates from 'unique-duplicates' // or  const uniqueDuplicates = require('unique-duplicates')

console.log(uniqueDuplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])) // [1, 4, 3]
console.log(uniqueDuplicates(['Amy', 'Mario', 1, 3, 'Amy', 3, '1'])) // [ 'Amy', 3 ]
```

## Raison d'être
Finding unique values of duplicates can be tricky. This will hopefully help you focus on more important stuff.

Super Light (5 sloc). No dependencies.

## License
![](https://img.shields.io/badge/license-MIT-blue.svg) © [Mohamed Hayibor](https://github.com/mohamedhayibor)
