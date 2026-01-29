# Decky 启动选项 (Run Options) 🚀

[English](./README.md) | **中文**

> **常用启动项，触手可及。**
>
> 在 Decky Loader 中轻松复制 Steam 游戏和非 Steam 应用的常用启动参数。

![Decky Option](https://raw.githubusercontent.com/SteamDeckHomebrew/decky-plugin-template/main/assets/plugin.png)
*(请替换为实际的截图或 Logo)*

## ✨ 功能特性

告别手动输入冗长的命令。**Decky Run Options** 为常用的 Chromium/Electron 和应用程序参数提供了一个快捷的复制粘贴界面。

*   **🔍 缩放比例 (Scale Factor)**: 快速获取 `--force-device-scale-factor=1.25`，修复 UI 缩放过小的问题。
*   **🖥️ 全屏模式**:
    *   **标准 (Standard)**: `--start-fullscreen`，适用于普通的全屏应用。
    *   **锁定 (Kiosk)**: `--kiosk`，用于锁定、受限制的全屏体验（通常无法退出）。
*   **🪟 窗口大小 (Window Size)**: 预设 `--window-size=1280,800`，完美适配 Steam Deck 的屏幕比例。
*   **🌐 多语言支持**: 内置支持 **英语** 和 **简体中文**。
*   **📋 一键复制**: 只需轻轻一点，即可将任何命令复制到系统剪贴板。

## 🛠️ 使用方法

1.  打开 Steam Deck 上的 **快捷访问菜单 (QAM)**（右侧 ... 按钮）。
2.  找到并进入 **Decky Option** 插件页面。
3.  点击所需选项下方的 **Copy to clipboard (复制到剪贴板)** 按钮。
4.  在 Steam 中打开游戏或应用的属性页面，将其粘贴到 **启动选项 (Launch Options)** 的末尾！

## 📦 安装与开发

本插件基于 [decky-plugin-template](https://github.com/SteamDeckHomebrew/decky-plugin-template) 构建。

### 前置要求
*   Node.js (v18+)
*   pnpm (推荐)

### 源码编译

```bash
# 安装依赖
pnpm install

# 构建插件
pnpm run build

# 开发模式（支持热重载）
pnpm run watch
```

### 部署到 Steam Deck

```bash
# 假设你已经配置好了 CLI 或者使用 VSCode 任务
pnpm run deploy
```

## 📄 许可证

本项目采用 BSD-3-Clause 许可证。
