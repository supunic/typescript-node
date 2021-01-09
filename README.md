## 環境構築
- `tsconfig.json`
  - nodeのバージョンと合わせて、`https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping`でおすすめを指定する


## ts-node
- `https://github.com/TypeStrong/ts-node`
- tsへのコンパイルなどやってくれる

## nodemon
- node.jsのts watchモードができる
- 今回はこっちを使う

## Express
- apiやwebapp作成のフレームワーク

### 型定義
- tsは`require()`でインポートしたものの型を把握できない
  - `import xxx from 'xxx'`分を使う

## moduleの復習
- node.jsでは`require('./practice-export')`のように`.js`を省略できる
- objectはjs上では、**参照渡し**になっている
```js
module.exports = {}
exports = module.exports
// {}がメモリに保管される
// → module.exportsは、{}を参照する
// → exportsは、module.exportsを参照する
// → つまり、exportsは、{}を参照する（参照渡し）

// したがって、
module.exports.hello = 'hello'
exports.name = 'Peter'
// とすると、
// { hello: 'hello', name: 'Peter' }
// のようになる

// しかし、新しく
module.exports = {
  name: 'bbb'
}
// のようにオブジェクトを再定義してしまうと
// 参照オブジェクトが書き換えられ、違うメモリに値が保管されるため
// exportsで反映されない
```

### esModuleInterop
- esModuleInterOperation
- moduleの相互補完性

#### そもそもインポートとは
- デフォルトインポート
  - `import practice from './preactice-export'`文
    - jsに変換するときに`exports.default = ...`の形になる

- 名前付きインポート
  - `import * as practice from './preactice-export'`文
    - jsに変換されると`export.name = ...`のようにexport時につけた名前で呼び出される

#### esModuleInteropについて
- expressの場合
  - `import express from 'express'`（デフォルトインポート）
    - `esModuleInterop: false`だとエラー
  - `import * as express from 'express'`（名前付きインポート）
    - `esModuleInterop: false`でもエラーにならない
  - `const express = require('express')`（専用の構文）
    - `esModuleInterop: false`でもエラーにならない

#### 名前付きインポートのjsの制約
- Not callable
  - ()で関数呼び出しできるような形でimportしてはいけない
- Not newable
  - newできるような形でimportしてはいけない
```ts
import * as express from 'express'
const app = express()
// この形はめちゃくちゃjsのルールを破っている
```
- そのため、`const express = require('express')`構文を新しく作った

#### 結局どう書けばいいか
- `const express = require('express')`
- または
- `import * as express from 'express'`
- デフォルトインポートは外部パッケージが対応しているか否かで使えるかが変わる。（`import express from 'express'`）

#### exportsは？
```ts
export const person = 'Peter'
// js → exports.person = 'Peter';（exports.xxx）の形
```

```ts
const person = {
    name: 'Peter'
};
module.exports = person;

// js → 
// const person = {
//     name: 'Peter'
// };
// module.exports = person;（module.exports = ...）の形
```

### ツール間でのimportの書き方の違う件
- tsは悩む
  - `esModuleInterop`が答え
- `esModuleInterop: true`が解決する
- 