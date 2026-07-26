---
layout: ../../../../layouts/ja/MarkdownPostLayoutJa.astro
title: "Webサイト立ち上げの記録 (2) - Astro を使う準備"
published: 2026-06-21
modified: 2026-06-29
lang: 'ja'
category: web-dev
---
前の記事は [こちら](/ja/posts/web-dev/2026-06-13_deciding_to_use_github_and_astro)

Astro を使うための環境構築としてやったことは大きく分けるとこの2つ。
- Visual Studio Code のインストール
- Node.js のインストール

## Visual Studio Code のインストール
Visual Studio Code（以下、VSCode）のインストールはシンプル。  
<a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/">公式サイト</a> でダウンロードしたインストーラを実行するだけ。  
（英語版で特に不便だとは思わないので、日本語で使うための設定とかは諸々省いた）

## Node.js の復習
VSCode ほどシンプルにいかないのがNode.js、だったはず...

というかそもそも Node.js ってそもそも何かあやふやだったので復習。
- Webブラウザに限らず、サーバ側で JavaScript を実行できる環境である
- パッケージ管理として npm が入っている

復習オッケー!

## Node.js はツールを使ってインストール
<a class="icon-new-tab" target="_blank" href="https://nodejs.org/ja">Node.js の公式サイト</a>にインストーラはあるけれど、<a class="icon-new-tab" target="_blank" href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm のドキュメント</a>を読んでいると、 nvm といったツールを使ったインストールが推奨されている。  
Node.js のインストーラはローカル権限で npm をインストールするから、例えば `npm package` をグローバル指定で実行しようとすると、権限エラーが出るらしい。  
あとは nvm はNode のバージョンを管理してくれるので、複数の Node.js や npm のバージョンを切り替えられるのだそう。  
（要は nodist と同じようなことをしてくれるのね！と理解）  

Windowsの場合、nvm-windows というツールがあるのでまずはこれをインストールする。

## nvm-windows のインストール
<a class="icon-new-tab" target="_blank" href="https://github.com/coreybutler/nvm-windows">GitHubリポジトリ</a> からインストーラをダウンロード。  
※ Node.js が既に PC に入っている場合は、まずアンインストールしておくことが推奨されている。自分は Node.js が入っていないまっさらな状態からのスタートだったのでここはスキップ。  

ダウンロードしたインストーラを起動。  
とりあえずすべてデフォルトの設定で「次へ」をクリックしてインストールした。

## nvm から Node.js をインストール
1. 管理者権限でコマンドプロンプトを開く。
2. `nvm list available`でいったんダウンロードできる Node.js のバージョンリストをふんふんと眺める
3.  LTS 版をとりあえず入れておこうかなと思い、`nvm install lts` を実行
4. コマンドラインからバージョンを確認するコマンドを実行してちゃんとインストールされているか確認しておく。
```sh
> node -v
v 24.15.0
```
Node.js はオッケー！

```cmd
> npm -v
11.12.1
```
npm もオッケー！

これでVSCodeに Astro の拡張機能を入れれば、Astro を使う準備は整うはず。

## 参考リンク
- Coursera, <a class="icon-new-tab" target="_blank" href="https://www.coursera.org/articles/node-js">What Is Node.js? Understanding Its Applications</a>
- npm Docs, <a class="icon-new-tab" target="_blank" href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Downloading and installing Node.js and npm</a>
- <a class="icon-new-tab" target="_blank" href="https://github.com/coreybutler/nvm-windows">GitHub - coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go. · GitHub</a>
- <a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/">Visual Studio Code - The open source AI code editor | Your home for multi-agent development</a>
- <a class="icon-new-tab" target="_blank" href="https://nodejs.org/ja">Node.js — どこでもJavaScriptを使おう</a>

## 関連
- [Webサイト立ち上げの記録 (1) - 利用するサービス・ツールを決める](/ja/posts/web-dev/2026-06-13_deciding_to_use_github_and_astro)