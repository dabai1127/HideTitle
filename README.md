# 隐藏网页标题

这是一个 Chrome / Edge Manifest V3 扩展，会隐藏普通网页标签页里的标题文字，同时保留网站图标。

## 安装

1. 打开 `chrome://extensions`（Edge 使用 `edge://extensions`）。
2. 打开右上角的“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择本文件夹 `隐藏title`。
5. 刷新已经打开的网页。

扩展只对普通网页生效；浏览器内部页面（例如 `chrome://extensions`）、扩展页面和部分受保护页面不能被浏览器扩展修改，这是浏览器的限制。

![](https://github.com/dabai1127/HideTitle/blob/main/preview.png?raw=true)

## 工作方式

扩展在页面开始加载时把 `document.title` 设置为零宽字符，并监听单页应用或网页脚本对标题的后续修改。网页的实际标题不会被保存或上传。
