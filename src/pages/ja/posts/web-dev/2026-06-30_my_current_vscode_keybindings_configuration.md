---
layout: ../../../../layouts/MarkdownPostLayout.astro
title: 今のVSCodeのkeybindings設定
published: 2026-06-30
modified: 
lang: 'ja'
category: web-dev
---
*Read the English version [here](/posts/web-dev/2026-05-12_my_current_vscode_keybindings_configuration).*  

コーディングするときや、Markdownファイルを編集するのにVSCodeを使い続けている。  

今のkeybindings.jsonの設定内容はこんなかんじ:

```json
[
    // `Alt` + `;` -> 現在日付
    {
        "key": "alt+oem_plus",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE"
        }
    },
    //  `Alt` + `:` -> 現在時間
    {
        "key": "alt+oem_1",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "$CURRENT_HOUR:$CURRENT_MINUTE"
        }
    }
]
```

この設定をすることで、VSCodeで以下のようなショートカットキーを使えるようにしている:  
- `Alt` + `;` : `YYYY-MM-DD`フォーマットの現在日付
- `Alt` + `:` : `HH:MM` フォーマットの現在時間

## 参考リンク
- Vsual Studio Code, <a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/docs/configure/keybindings">Keyboard shortcuts for Visual Studio Code</a> (閲覧日: 2026-05-12)
- Vsual Studio Code, <a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/docs/editing/userdefinedsnippets">Snippets in Visual Studio Code</a>  (閲覧日: 2026-05-12)
- @umyu, <a class="icon-new-tab" target="_blank" href="https://qiita.com/umyu/items/d9c3875133b8d1c6cb20">VSCodeのショートカットキーに現在の日付を入力するキーを追加する。</a>  (閲覧日: 2026-05-12)
 