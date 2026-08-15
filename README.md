# 世界時計 (World Clock)

現在地の日時と、リストから選んだ都市の日時を表示するだけのシンプルな世界時計アプリです。

## 機能

- 現在地（ブラウザのタイムゾーン）の日時をリアルタイム表示
- 都市を選択すると、その都市の対応する日時を表示
- 日本語UI

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルド

```bash
npm run build
npm run start
```

## 都市の追加・編集

[src/lib/cities.ts](src/lib/cities.ts) のリストに `{ id, name, country, timeZone }` を追加するだけです。`timeZone` は IANA タイムゾーンID（例: `Asia/Tokyo`）を指定してください。

## Vercel へのデプロイ

このプロジェクトは追加設定なしで [Vercel](https://vercel.com) にデプロイできます。

1. このリポジトリを GitHub にプッシュする
2. [vercel.com/new](https://vercel.com/new) でリポジトリを選択してインポートする
3. フレームワークは自動的に Next.js と検出されるので、そのまま「Deploy」

または Vercel CLI を使う場合:

```bash
npm i -g vercel
vercel
```
