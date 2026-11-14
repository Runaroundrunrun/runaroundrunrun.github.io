---
layout: ../../../../layouts/ja/MarkdownPostLayoutJa.astro
title: Astro v7 へのUpgrade
published: 2026-11-14
modified: 
lang: 'ja'
category: web-dev 
---
このウェブサイトのビルドに使っている Astro を、やっとv7へアップグレードできた...

やることはシンプルなはずで、
```cmd
npx @astrojs/upgrade
```
というコマンドを叩いて、あとは「YES」と答えるだけと思ってたのだけど！

その後にいつも通り localhost で動かしてみようとして `npm run dev` を実行すると、 satteri[^1] に関連するモジュールがないよぉぉ！というエラーが出てきて、それと数週間戦っていた。

使っている Node.js のバージョンを上げれば良かった、というオチだったけど…

試したことや、VSCodeのターミナルに出てきたメッセージを備忘として残しておく。

<details>
<summary>Astro v7 へアップグレードできるまでの過程</summary>

※出力されているパスは手で適当に直したもの

1. 以下のコマンドを実行
```cmd
npx @astrojs/upgrade
```
2. 以下で`y`を入力
```cmd
Need to install the following packages:
@astrojs/upgrade@0.7.5
Ok to proceed? (y)
```
3. 以下で`Yes`を選択
```cmd
 astro   Integration upgrade in progress.

      ◼  @astrojs/rss is up to date on v4.0.19
      ▲  astro will be updated  from v6.4.3 to v7.3.5

  wait   One package has breaking changes. Continue?
```
4. 以下が出たけど、一旦無視。
```cmd
 check   Be sure to follow the CHANGELOG.
         astro https://docs.astro.build/en/guides/upgrade-to/v7/

 ██████  Installing dependencies with npm...

+—————+  Houston:
| ^ u ^  Have fun building!
+—————+
npm notice
npm notice New major version of npm available! 11.12.1 -> 12.2.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.2.0
npm notice To update run: npm install -g npm@12.2.0
npm notice
```
5. `npm run dev`を実行すると、以下のエラーが出てきた。
```cmd
Error: Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
    at /path/to/.../node_modules/satteri/index.js:585:19
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async runCommand (/path/to/.../node_modules/astro/dist/cli/index.js:172:22)
    at async cli (/path/to/.../node_modules/astro/dist/cli/index.js:222:5) {
  cause: Error: The specified module could not be found.
  \\?\\path\to\...\node_modules\@bruits\satteri-win32-x64-msvc\satteri_napi.win32-x64-msvc.node
      at Object..node (node:internal/modules/cjs/loader:1988:18)
      at Module.load (node:internal/modules/cjs/loader:1553:32)
      at Module._load (node:internal/modules/cjs/loader:1355:12)
      at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
      at Module.require (node:internal/modules/cjs/loader:1576:12)
      at require (node:internal/modules/helpers:153:16)
      at requireNative (/path/to/.../node_modules/satteri/index.js:135:25)
      at /path/to/.../node_modules/satteri/index.js:530:17
      at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
      at async node:internal/modules/esm/loader:639:26 {
    code: 'ERR_DLOPEN_FAILED',
    cause: Error: Cannot find module './satteri_napi.win32-x64-msvc.node'
    Require stack:
    - \path\to\...\node_modules\satteri\index.js
        at Module._resolveFilename (node:internal/modules/cjs/loader:1476:15)
        at wrapResolveFilename (node:internal/modules/cjs/loader:1049:27)
        at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1073:10)
        at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1094:12)
        at Module._load (node:internal/modules/cjs/loader:1262:25)
        at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
        at Module.require (node:internal/modules/cjs/loader:1576:12)
        at require (node:internal/modules/helpers:153:16)
        at requireNative (/path/to/.../node_modules/satteri/index.js:130:16)
        at /path/to/.../node_modules/satteri/index.js:530:17 {
      code: 'MODULE_NOT_FOUND',
      requireStack: [Array]
    }
  }
}
```
6. `package-lock.json`と`node_modules`を削除して、`npm i`を実行。実行結果:
```cmd
added 221 packages, and audited 222 packages in 27s

88 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
7. `npm run dev`を再度実行すると、以下のエラーが出てくる。
```cmd
    code: 'ERR_DLOPEN_FAILED',
    cause: Error: Cannot find module './satteri_napi.win32-x64-msvc.node'
    Require stack:
    - \path\to\...\node_modules\satteri\index.js
        at Module._resolveFilename (node:internal/modules/cjs/loader:1476:15)
        at wrapResolveFilename (node:internal/modules/cjs/loader:1049:27)
        at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1073:10)
        at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1094:12)
        at Module._load (node:internal/modules/cjs/loader:1262:25)
        at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
        at Module.require (node:internal/modules/cjs/loader:1576:12)
        at require (node:internal/modules/helpers:153:16)
        at requireNative (/path/to/.../node_modules/satteri/index.js:130:16)
        at /path/to/.../node_modules/satteri/index.js:530:17 {
      code: 'MODULE_NOT_FOUND',
      requireStack: [Array]
    }
  }
}
```
8. node_modules を削除。
9. 別ウィンドウでコマンドプロンプトを出す。npmのバージョンチェック
```cmd
> npm -v
11.12.1
```
10. nvm for windowsのドキュメンテーションを読むと、npmのバージョンアップというか、nvm for windows のバージョンアップが必要みたいなのでそれをやる
11. nvm for windows 2.0.0のsetup.exeを実行
12. `nvm -v`を実行してバージョンを確認
```cmd
> nvm -v
v2.0.0
```
13. Node.jsをインストール
```cmd
> nvm install lts
```
```
> nvm use latest
```
これで`v24.21.0`を使うことに。

14. `npm -v`を実行すると出てくるバージョンはこれになった:
```cmd
> npm -v
11.19.0
```
15. これで`npm install`を実行してみる
```cmd
88 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   esbuild@0.28.2 (postinstall: node install.js)
npm warn install-scripts
npm warn install-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.
```
16. `npm run dev`を実行してみる
```cmd
Error: Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
    at /path/to/.../node_modules/satteri/index.js:585:19
    at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
    at async node:internal/modules/esm/loader:647:26
    at async runCommand (/path/to/.../node_modules/astro/dist/cli/index.js:172:22)
    at async cli (/path/to/.../node_modules/astro/dist/cli/index.js:222:5) {
  cause: Error: The specified module could not be found.
  \\?\\path\to\...\node_modules\@bruits\satteri-win32-x64-msvc\satteri_napi.win32-x64-msvc.node
      at Object..node (node:internal/modules/cjs/loader:2087:18)
      at Module.load (node:internal/modules/cjs/loader:1651:32)
      at Module._load (node:internal/modules/cjs/loader:1443:12)
      at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
      at Module.require (node:internal/modules/cjs/loader:1674:12)
      at require (node:internal/modules/helpers:157:16)
      at requireNative (/path/to/.../node_modules/satteri/index.js:135:25)
      at /path/to/.../node_modules/satteri/index.js:530:17
      at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
      at async node:internal/modules/esm/loader:647:26 {
    code: 'ERR_DLOPEN_FAILED',
    cause: Error: Cannot find module './satteri_napi.win32-x64-msvc.node'
    Require stack:
    - \path\to\...\node_modules\satteri\index.js
        at Module._resolveFilename (node:internal/modules/cjs/loader:1564:15)
        at wrapResolveFilename (node:internal/modules/cjs/loader:1118:27)
        at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1142:10)
        at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1169:12)
        at Module._load (node:internal/modules/cjs/loader:1341:5)
        at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
        at Module.require (node:internal/modules/cjs/loader:1674:12)
        at require (node:internal/modules/helpers:157:16)
        at requireNative (/path/to/.../node_modules/satteri/index.js:130:16)
        at /path/to/.../node_modules/satteri/index.js:530:17 {
      code: 'MODULE_NOT_FOUND',
      requireStack: [Array]
    }
  }
}
```
17. npm のキャッシュを削除してみる
```cmd
npm cache clean --force
```
18. `npm install`を再実行。
19. 以下を実行した
```cmd
> npm install-scripts ls
1 package has install scripts not yet covered by allowScripts:
  esbuild@0.28.2 (postinstall: node install.js)

Run `npm install-scripts approve <pkg>` to allow, or `npm install-scripts deny <pkg>` to deny.
```
20. 以下を実行:
```cmd
> npm install-scripts approve esbuild@0.28.2
Approved esbuild:
  added esbuild@0.28.2
```
21. `npm run dev`を実行したが、やっぱり改善せず。
22. 以下を実行した。Geminiにアドバイスを求めて。でもやはりだめ。
```cmd
> npm install -D @bruits/satteri-win32-x64-msvc
up to date, audited 215 packages in 1s

88 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
23. package-lock.json, node_modulesを削除、npmのキャッシュをクリーン。
24. `npm install --force`を実行
```cmd
> npm install --force
npm warn using --force Recommended protections disabled.

added 214 packages, and audited 215 packages in 59s

88 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
25. `npm rebuild`を実行
```cmd
> npm rebuild
rebuilt dependencies successfully
```
26. `npm run dev`を実行したけど、やっぱり同じエラーが出る...
27. `satteri_napi.win32-x64-msvc.node`は、`node_modules/@bruits/satteri-win32-x64-msvc`には入っていた
28. Geminiに聞いたら、そのパッケージを別個でインストールしてみて、と言われる
> Windows用のバインディングパッケージを直接プロジェクトにインストール（追加）してみてください。
```cmd
npm install @bruits/satteri-win32-x64-msvc
```
言われたことをやってもやっぱり同じエラーが出る。

29. パスが長すぎるかも、とかnode, npmのバージョンを変えて試してみると良いかも、とGeminiには言われる。  
違うAIにも聞いてみたら、Node.jsを`24.22.1`へupdateしてみて、とのこと。
```cmd
> nvm install 24.22.1
Installed 1 version: 24.22.1
Completed in 28s
> nvm use 24.22.1
Now using Node.js v24.22.1 by default.
> node -v
v24.22.1
```
31. astroのupgradeを再度やってみる。
```cmd
> npx @astrojs/upgrade
Need to install the following packages:
@astrojs/upgrade@0.8.1
Ok to proceed? (y) y

 astro   Integration upgrade in progress.

      ◼  @astrojs/rss is up to date on v4.0.19
      ▲  astro will be updated  from v6.4.3 to v7.4.2

  wait   One package has breaking changes. Continue?
         Yes

 check   Be sure to follow the CHANGELOG.
         astro https://docs.astro.build/en/guides/upgrade-to/v7/

 ██████  Installing dependencies with npm...

+—————+  Houston:
| ^ u ^  Thanks for using Astro!
+—————+
```
32. `npm run dev`を叩いてlocalhostでページを観れるようになった。  
うまくいったよおおお!

</details>

## 参考リンク
- astro DOCS, <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/guides/upgrade-to/v7/">Upgrade to Astro v7</a>
- NVM for Windows, <a class="icon-new-tab" target="_blank" href="https://docs.nvm-windows.com/install/installers">Installers | nvm-windows Documentation</a>

## 関連
- [Webサイト立ち上げの記録(3) - Astro を使ったプロジェクトの作成](/ja/posts/web-dev/2026-07-27_create_astro_project/)

---

[^1]: satteriはv7から使われるようになっている。
