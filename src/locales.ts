export interface LocaleStrings {
  fullScreenDesc: string;
  kioskDesc: string;
  windowSizeDesc: string;
  toggleButtonLabel: string;
}

export const locales: Record<string, LocaleStrings> = {
  "en": {
    fullScreenDesc: "Fullscreen: You can exit using app shortcuts",
    kioskDesc: "Locked Fullscreen: Fixed view; exit is restricted",
    windowSizeDesc: "Custom window size (usually automatic)",
    toggleButtonLabel: "Lang: EN",
  },
  "zh-cn": {
    fullScreenDesc: "非强制性的全屏: 通常可以用应用特定方式退出",
    kioskDesc: "强制性的全屏: 通常无法退出",
    windowSizeDesc: "指定窗口大小，通常不需要手动设置",
    toggleButtonLabel: "Lang: 中文",
  }
};
