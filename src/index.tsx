import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  TextField
} from "@decky/ui";
import { definePlugin, toaster } from "@decky/api";
import { FaTerminal, FaCopy } from "react-icons/fa";

function Content() {
  const copyToClipboard = (text: string) => {
    // Simplified copy logic using Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        toaster.toast({
          title: "Copied",
          body: "Text copied to clipboard!"
        });
      }).catch((err) => {
        console.error("Clipboard API failed", err);
        toaster.toast({
          title: "Error",
          body: "Failed to copy text."
        });
      });
    } else {
      // Fallback or error if API not available (though it should be in Decky)
      toaster.toast({
        title: "Error",
        body: "Clipboard API not available."
      });
    }
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
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
        <div style={{ padding: "0 10px 10px 10px", fontSize: "0.9em", color: "#8b929a" }}>
          非强制性的全屏，通常可以用应用特定方式退出全屏
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
         <div style={{ padding: "0 10px 10px 10px", fontSize: "0.9em", color: "#8b929a" }}>
          强制性的全屏，通常无法退出全屏
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