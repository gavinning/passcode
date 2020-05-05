passcode
---
生成短信验证码

### Install
```sh
npm i @4a/passcode
```

### Usage
```js
const passcode = require('@4a/passcode')

console.log(
    passcode()
)

console.log(
    passcode(4)
)

// 最大支持6位
console.log(
    passcode(6)
)
```
