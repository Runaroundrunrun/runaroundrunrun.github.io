---
layout: ../../layouts/MarkdownPostLayout.astro
title: My current keybindings configuration in VSCode
published: 2026-05-12
modified: 
lang: 'en'
tags: ["coding"]
---
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
- [Keyboard shortcuts for Visual Studio Code](https://code.visualstudio.com/docs/configure/keybindings) - VSCode  
(accessed: 2026-05-12)
- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editing/userdefinedsnippets) - VSCode  
(accessed: 2026-05-12)
- [VSCodeのショートカットキーに現在の日付を入力するキーを追加する。 #VSCode - Qiita](https://qiita.com/umyu/items/d9c3875133b8d1c6cb20) - @umyu  
(accessed: 2026-05-12)