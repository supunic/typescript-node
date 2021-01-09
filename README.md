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