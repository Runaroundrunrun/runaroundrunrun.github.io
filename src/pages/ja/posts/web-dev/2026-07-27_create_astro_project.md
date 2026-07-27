---
layout: ../../../../layouts/MarkdownPostLayout.astro
title: Webサイト立ち上げの記録(3) - Astro を使ったプロジェクトの作成
published: 2026-07-27
modified: 
lang: 'ja'
category: web-dev
---
前の記事は [こちら](/ja/posts/web-dev/2026-06-21_install_nodejs)

Node.jsのインストールが終わり、いよいよ Astro を使った開発のスタート！

まず、 VSCode に Astro の拡張機能を入れておく。  
- <a class="icon-new-tab" target="_blank" href="https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode">Astro - Visual Studio Marketplace</a>

いきなり本番はさすがに難易度高いのでは？と思ったので、とりあえず Astro のブログを作る公式チュートリアルを（ほぼ[^1]）ひととおりやった。  
- <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/tutorial/0-introduction/">Build a blog tutorial | Astro Docs</a>
    - 英語だけど機械翻訳を駆使していけばそんなに難しくないはず！
    - この記事でひとつひとつ解説していくことも考えたけど、それって著作権的に微妙では…？と感じたのでリンクを貼るだけに留めている。
    - だいたい1ユニットに1～2日かけたけど、気合があれば1日でできそう。

チュートリアルに従ってサンプルのブログを作ってみたあとは、いよいよ自分のWebサイト作成である。

## このWebサイトを最初に作った時の流れ
このWebサイトは最初、こういう流れで作った。

1. チュートリアルの <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/tutorial/4-layouts/">Unit 4 - Layouts</a>  と途中まで同じものを作る。  
<!--
① 以下のコマンドを VSCode のターミナルに入力し、 `Enter`

```sh
> npm create astro@latest
```

② `create-astro` をインストールするので `y` を入力し、 `Enter`  
③ プロジェクトの作成場所を入力  
④ スターターテンプレートのリストからは `minimal (empty)` を選択し、 `Enter`  
⑤ dependencies をインストールするか聞かれるので、 `y` を入力し、 `Enter`  
⑥ git repository を初期化するか聞かれるので、 `y` を入力し `Enter` -->

2. GitHub Pages にデプロイするためのファイル `deploy.yml` を、プロジェクトフォルダ配下の `.github/workflows` に作る。[^2]
3. `astro.config.mjs`を編集して、`site`にサイトのGitHub URLを設定する。
```mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    // このサイトのトップページのURLを設定している。
    site: 'http://runaroundrunrun.github.io',
    // ※リポジトリ名とユーザ名が違っていれば、上記の site のほかに base の設定が必要
});
```
4. ブラウザでGitHubにアクセスし、プロジェクトページの設定を変更する。  
`Settings` タブの `Pages`セクションをクリックし、`Source` のリストボックスから `GitHub Actions` を選択する。
5. GitHub Pages にデプロイしたときに、 Jekyll のビルドが走ってエラーになったので、 `public` 配下に `.nojekyll` を追加。
6. この時点でのフォルダ構成はこんな感じ。
```
(root)
 ├ .github
 │    └ workflows
 │      └ deploy.yml
 ├ .vscode -- 自動的に生成される
 ├ node_modules -- 自動的に生成される
 ├ public
 │   ├ images -- ロゴやアイコン画像をここに格納している
 │   ├ .nojekyll
 │   ├ favicon.ico
 │   └ favicon.svg
 ├ src
 │   ├ components
 │   │   ├ Footer.astro
 │   │   ├ Header.astro
 │   │   └ Navigation.astro
 │   │      :    
 │   │
 │   ├ layouts
 │   │   ├ ja   -- 日本語ページ用のレイアウト
 │   │   │   ├ BaseLayoutJa.astro
 │   │   │   └ MarkdownPostLayoutJa.astro
 │   │   ├ BaseLayout.astro
 │   │   └ MarkdownPostLayout.astro
 │   │
 │   ├ pages
 │   │   ├ images   -- プロフィール画像などを格納
 │   │   ├ ja   -- 日本語ページ、Markdown形式の記事を格納。
 │   │   ├ posts -- Markdownファイル形式の記事を格納。
 │   │   ├ 404.astro
 │   │   ├ about.astro
 │   │   ├ index.astro
 │   │   ├ links.astro
 │   │   └ posts.astro
 │   └ styles
 │       └ global.css
 │          :
 │
 ├ .gitignore
 ├ astro.config.mjs
 ├ package-lock.json
 ├ package.json
 ├ README.md
 └ tsconfig.json
```

7. 参考にしたいWebページや、ページのパーツの構成を参考[^3]に、`.astro` ファイルや CSSファイルを編集する。
8. Git でコミット＆ `main` ブランチへプッシュ[^4]。  
10. 7.と8.のステップを繰り返す[^5]。

## HTML, CSSの参考にした Webページ
- VSCode のドキュメント - <a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/docs">Documentation for Visual Studio Code</a>
- MDN のドキュメント - <a class="icon-new-tab" target="_blank" href="https://developer.mozilla.org/ja/docs/Web">開発者向けのウェブ技術 | MDN</a>
- <a class="icon-new-tab" target="_blank" href="https://cassidoo.co/">Cassidy Williams</a>
    - 色のついた下線の引き方とかを知りたくて！
- <a class="icon-new-tab" target="_blank" href="https://flamedfury.com/">FLAMED FURY</a>
- <a class="icon-new-tab" target="_blank" href="https://guzey.com/">Alexey Guzey</a>
　- 角の丸い枠線の作り方を参考にさせてもらいました。
- <a class="icon-new-tab" target="_blank" href="https://untested.sonnet.io/">Untested · Rafał Pastuszak</a>
    - フォントを参考にした。

## 参考リンク
- Astro Docs, <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/tutorial/4-layouts/">Unit 4 - Layouts</a> (閲覧日: 2026-07-07)
- Astro Docs, <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/guides/deploy/github/">Deploy your Astro Site to GitHub Pages</a> (閲覧日: 2026-07-07)

## 関連
- [Webサイト立ち上げの記録 (2) - Astro を使う準備](/ja/posts/web-dev/2026-06-21_install_nodejs)

----------
[^1]: Webサイトをホストする <a class="icon-new-tab" target="_blank" href="https://www.netlify.com/">Netlify</a> へのデプロイとかはスキップした。私の目標は GitHub Pages にデプロイすることだったので！  
[^2]: ファイル `deploy.yml` の内容などは <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/guides/deploy/github/">公式ドキュメント</a>にあったものをコピペした。
[^3]: 参考にしたいWebページを開いているときに `F12` キーを押すと、開発者ツールが開いてそのページがどんなHTML、CSSになっているのかを見ることができる。  
[^4]: GitHub Pages にデプロイするためには設定ファイル deploy.yml に記載しているブランチ(例の場合main)にプッシュする必要がある。  
[^5]: このサイトでは現在進行系でこの作業を繰り返している...

