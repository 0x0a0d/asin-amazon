# AsinAmazon

```bash
npm i asin-amazon --save
```

```js
const AsinAmazon = require('asin-amazon');

const asin = new AsinAmazon('B07JJV4NZZ');
console.log(asin.increase().me());
//B07JJV4O00
console.log(asin.decrease().me());
//B07JJV4NZZ
```

```
Methods
.increase() => increase ASIN by 1 step
.decrease() => decrease ASIN by 1 step
.me() => return current ASIN value

Static methods
AsinAmazon.increase(asin) => increase ASIN and return
AsinAmazon.decrease(asin) => decrease ASIN and return
```


##### Author

0x0a0d