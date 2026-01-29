import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  TextField
} from "@decky/ui";
import { definePlugin, toaster } from "@decky/api";
import { FaTerminal, FaCopy, FaLanguage } from "react-icons/fa";
import { useState } from "react";
import { locales } from "./locales";

function Content() {
  const [lang, setLang] = useState<'en' | 'zh-cn'>('zh-cn');
  const t = locales[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'zh-cn' : 'en');
  };

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      toaster.toast({
        title: "Copied",
        body: "Text copied to clipboard!"
      });
    } catch (err) {
      console.error("Fallback copy failed", err);
      toaster.toast({
        title: "Error",
        body: "Failed to copy text."
      });
    } finally {
      document.body.removeChild(textarea);
    }
  };

  // Compact style helper
  const descriptionStyle = {
    padding: "0 10px 5px 10px", // Reduced bottom padding
    fontSize: "0.9em",
    color: "#8b929a"
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <PanelSection>
        <PanelSectionRow>
            <ButtonItem onClick={toggleLanguage}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <FaLanguage />
                    <span>{t.toggleButtonLabel}</span>
                </div>
            </ButtonItem>
        </PanelSectionRow>
      </PanelSection>

      {/* 1. ScaleFactor */}
      <PanelSection title="ScaleFactor">
        <PanelSectionRow>
          <TextField
            label="*1.25"
            value="--force-device-scale-factor=1.25"
            disabled={true}
            onChange={() => {}}
          />
        </PanelSectionRow>
        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => copyToClipboard("--force-device-scale-factor=1.25")}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <FaCopy />
              <span>Copy to clipboard</span>
            </div>
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>

      {/* 2. FullScreen */}
      <PanelSection title="FullScreen">
        <div style={descriptionStyle}>
          {t.fullScreenDesc}
        </div>
        <PanelSectionRow>
          <TextField
            label="Start Fullscreen"
            value="--start-fullscreen"
            disabled={true}
            onChange={() => {}}
          />
        </PanelSectionRow>
        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => copyToClipboard("--start-fullscreen")}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <FaCopy />
              <span>Copy to clipboard</span>
            </div>
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>

      {/* 3. Kiosk */}
      <PanelSection title="Kiosk">
         <div style={descriptionStyle}>
          {t.kioskDesc}
        </div>
        <PanelSectionRow>
          <TextField
            label="Kiosk Mode"
            value="--kiosk"
            disabled={true}
            onChange={() => {}}
          />
        </PanelSectionRow>
        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => copyToClipboard("--kiosk")}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <FaCopy />
              <span>Copy to clipboard</span>
            </div>
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>

      {/* 4. WindowSize */}
      <PanelSection title="WindowSize">
         <div style={descriptionStyle}>
          {t.windowSizeDesc}
        </div>
        <PanelSectionRow>
          <TextField
            label="Window Size"
            value="--window-size=1280,800"
            disabled={true}
            onChange={() => {}}
          />
        </PanelSectionRow>
        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => copyToClipboard("--window-size=1280,800")}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <FaCopy />
              <span>Copy to clipboard</span>
            </div>
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>
    </div>
  );
}

export default definePlugin(() => {
  return {
    name: "Decky Option2",
    content: <Content />,
    icon: <FaTerminal />,
    onDismount() {
      // Cleanup if necessary
    },
  };
});
