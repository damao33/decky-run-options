# Decky Run Options 🚀

**English** | [中文](./README.zh_CN.md)

> **Essential Launch Options at Your Fingertips.**
>
> Easily copy useful launch arguments for your Steam games and non-Steam apps directly from Decky Loader.

![Decky Option](https://raw.githubusercontent.com/SteamDeckHomebrew/decky-plugin-template/main/assets/plugin.png)
*(Replace with your actual screenshot or logo)*

## ✨ Features

Stop typing long commands manually. **Decky Run Options** provides a quick, copy-paste interface for common Chromium/Electron and application flags.

*   **🔍 Scale Factor**: Quick access to `--force-device-scale-factor=1.25` to fix UI scaling issues.
*   **🖥️ Fullscreen Modes**:
    *   **Standard**: `--start-fullscreen` for regular fullscreen apps.
    *   **Kiosk**: `--kiosk` for locked, restricted fullscreen experiences.
*   **🪟 Window Size**: Preset `--window-size=1280,800` for the perfect Steam Deck aspect ratio.
*   **🌐 Multi-Language**: Built-in support for **English** and **Simplified Chinese (简体中文)**.
*   **📋 One-Click Copy**: Instantly copy any command to your clipboard with a single tap.

## 🛠️ Usage

1.  Open the **Quick Access Menu** (QAM) on your Steam Deck.
2.  Navigate to the **Decky Option** plugin.
3.  Tap **Copy to clipboard** under the desired option.
4.  Paste it into the end of **Launch Options** of your game or app in Steam Properties!

## 📦 Installation & Development

This plugin is built using the [decky-plugin-template](https://github.com/SteamDeckHomebrew/decky-plugin-template).

### Prerequisites
*   Node.js (v18+)
*   pnpm (recommended)

### Build from Source

```bash
# Install dependencies
pnpm install

# Build the plugin
pnpm run build

# For development with live reload
pnpm run watch
```

### Deploy to Steam Deck

```bash
# Assuming you have the CLI set up or use the VScode task
pnpm run deploy
```

## 📄 License

This project is licensed under the BSD-3-Clause License.
