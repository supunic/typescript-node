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