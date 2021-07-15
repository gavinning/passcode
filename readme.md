passcode
---
生成短信验证码

### Install
```sh
npm i @4a/passcode
```

### Usage
```js
import passcode from '@4a/passcode'
// or
const passcode = require('@4a/passcode').default

console.log(
    passcode()
)

console.log(
    passcode(4)
)

// 推荐4或6位
console.log(
    passcode(6)
)
```
