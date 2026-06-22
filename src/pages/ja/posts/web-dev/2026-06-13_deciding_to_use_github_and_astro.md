---
layout: ../../../../layouts/ja/MarkdownPostLayoutJa.astro
title: "Webサイト立ち上げの記録 (1) - 利用するサービス・ツールを決める"
published: 2026-06-13
modified: 2026-06-22
lang: 'ja'
---
## GitHub Pages を使うと決める

最初はブログとWebサイト、どちらを作るか決めていなかったので、とりあえず私が日頃から見ていたサービスに絞って検討。  
だってやっぱり...ねえ？自分が馴染みのあるサービスがやっぱりいいじゃない？
- <a class="icon-new-tab" target="_blank" href="https://bearblog.dev/">Bear Blog</a>
- <a class="icon-new-tab" target="_blank" href="https://docs.github.com/ja/pages">GitHub Pages</a> ※ドキュメント
- <a class="icon-new-tab" target="_blank" href="https://note.com/">note</a>
- <a class="icon-new-tab" target="_blank" href="https://substack.com/">Substack</a>
- <a class="icon-new-tab" target="_blank" href="https://hatena.blog/">はてなブログ</a>


ブログのほかにも何か作りたいかも、と思ったのでGitHub Pages を使うことに。

## 静的サイトジェネレータ

GitHub Pages のドキュメントをななめ読みしていると、Jekyll という単語が出てくる。  
何回か聞いたことはあるけれど、その度に「Jekyll とは…？」と思うだけでスルーしていた。  
今回ちゃんと調べてみると、 Jekyll は静的Webサイトを作るツール（静的サイトジェネレータ、SSG）のひとつとのこと。  

そもそも静的サイトジェネレータがどういったものかもわからなかった私は、「個々のページを HTML, CSS を組み合わせて作るのと何が違うのん？」という疑問からのスタートである。

静的サイトジェネレータの機能としてよく紹介されるのは、「記事とかページのテンプレートを作っておけば、Markdown ファイルに書いた内容を HTML に変換してくれる」というもの（他にも便利な機能はある）。  
これは使ったらラクじゃないですか。
使ってみよう、静的サイトジェネレータ。
<br>
<br>
Jekyll の話に戻ると、これはGitHubが Ruby で開発したものらしい(だから GitHub Pages で推されてるのね)。  

...ちなみに私は Ruby に触れたことがない。  
よく知らない言語で作られたフレームワークを使うのはなんかちょっと気持ち悪い！できればある程度触ったことのある言語とかで作られているか、学習コストが低そうなツールがあると嬉しい！と思っていたら、ちゃんとあった。

例えばこんなフレームワーク。
- Astro
- Hugo
- Next.js

結果的には Astro を選んだのだけど、Astro を使うことに決めたのは、

- 私がよく追っているブログサイトでも使われていて、心強かったから
- JavaScript を使って開発されている - ギリギリ開発経験があるので、Ruby よりは馴染みがあった
- チュートリアルや GitHub Pages にデプロイするためのガイドが充実していそうだった （← これ大事）から

である。

## Astro を使うぞ！...ってちょっと待った

Astro のチュートリアルを読み始めて気づいたのだけど、まずは環境構築をしないといけない...  
(そらそうか)  
今自宅で使っている PC は開発用に使ったことがなかったので、 [Visual Studio Code と Node.js をインストールする](/ja/posts/web-dev/2026-06-21_install_nodejs_and_astro) ところからスタートである。  

開発環境を作る過程でやったことはまた別にまとめていく、予定。

## 参考文献
- Astro, <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/tutorial/0-introduction/">Build a blog tutorial</a> (閲覧日 2026-06-05)
- Astro, <a class="icon-new-tab" target="_blank" href="https://docs.astro.build/en/guides/deploy/github/">Deploy your Astro Site to GitHub Pages</a> (閲覧日 2026-06-05)
- cassidoo, <a class="icon-new-tab" target="_blank" href="https://blahg.netlify.app/">Cassidy's blog template</a> (閲覧日 2026-06-05)
(閲覧日 2026-06-05)
- CodeGrid, <a class="icon-new-tab" target="_blank" href="https://www.codegrid.net/articles/jekyll-1/">Jekyllで作るシンプルWebサイト | 第1回 Jekyllとはなにか</a> (閲覧日 2026-06-05)
- <a class="icon-new-tab" target="_blank" href="https://jekyllrb.com/">Jekyll • Simple, blog-aware, static sites | Transform your plain text into static websites and blogs</a> 
- sj-note, <a class="icon-new-tab" target="_blank" href="https://sj-note.com/ssg">ブログに使うため、静的サイトジェネレーターを比較してみた</a> (閲覧日 2026-06-05)
- 「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典, <a class="icon-new-tab" target="_blank" href="https://wa3.i-3-i.info/word11862.html">静的ページとは</a> (閲覧日 2026-06-05)

## 関連
- [ウェブサイトを立ち上げてみた](/ja/posts/web-dev/2026-05-20_on_setting_up_this_website)