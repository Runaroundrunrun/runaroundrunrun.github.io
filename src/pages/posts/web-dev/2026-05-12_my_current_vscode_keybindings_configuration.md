---
layout: ../../../layouts/MarkdownPostLayout.astro
title: My current keybindings configuration in VSCode
published: 2026-05-12
modified: 2026-06-30
lang: 'en'
tags: ["coding"]
---
*[日本語で読む](/ja/posts/web-dev/2026-06-30_my_current_vscode_keybindings_configuration)*

I use VSCode for coding and editing Markdown files.

Here's my current keybindings.json:

```json
[
    // `Alt` + `;` -> current date
    {
        "key": "alt+oem_plus",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE"
        }
    },
    //  `Alt` + `:` -> current time
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

The configuration above allows me to use these shortcuts in VSCode:
- `Alt` + `;` : current date in `YYYY-MM-DD` format
- `Alt` + `:` : current time in `HH:MM` format

## Resources
- Visual Studio Code, <a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/docs/configure/keybindings">Keyboard shortcuts for Visual Studio Code</a>  
 (accessed: 2026-05-12)
- Visual Studio Code, <a class="icon-new-tab" target="_blank" href="https://code.visualstudio.com/docs/editing/userdefinedsnippets">Snippets in Visual Studio Code - VSCode</a>   (accessed: 2026-05-12)
- @umyu, <a class="icon-new-tab" target="_blank" href="https://qiita.com/umyu/items/d9c3875133b8d1c6cb20">VSCodeのショートカットキーに現在の日付を入力するキーを追加する。</a>  (accessed: 2026-05-12)
 