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
    fullScreenDesc: "普通全屏：可通过应用快捷键或常规方式退出",
    kioskDesc: "锁定全屏：强制固定视图，限制退出操作",
    windowSizeDesc: "自定义窗口大小（通常保持默认即可）",
    toggleButtonLabel: "Lang: 中文",
  }
};
