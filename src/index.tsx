import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  TextField,
  staticClasses
} from "@decky/ui";
import { definePlugin, toaster } from "@decky/api";
import { useState } from "react";
import { FaTerminal, FaArrowLeft, FaCopy } from "react-icons/fa";

enum View {
  Main,
  ScaleFactorMenu,
  Detail125
}

function Content() {
  const [view, setView] = useState<View>(View.Main);

  const copyToClipboard = (text: string) => {
    // 尝试使用 Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        toaster.toast({
          title: "Copied",
          body: "Text copied to clipboard!"
        });
      }).catch((err) => {
        console.error("Clipboard write failed", err);
        toaster.toast({
          title: "Error",
          body: "Failed to copy text."
        });
      });
    } else {
       // Fallback for some environments if needed, though rare in modern Decky
       toaster.toast({
          title: "Error",
          body: "Clipboard API unavailable."
       });
    }
  };

  // 渲染返回按钮头部的辅助函数
  const renderHeader = (title: string, onBack: () => void) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div 
        onClick={onBack} 
        style={{ cursor: 'pointer', marginRight: '10px', display: 'flex', alignItems: 'center' }}
      >
        <FaArrowLeft />
      </div>
      <div className={staticClasses.Title}>{title}</div>
    </div>
  );

  // 1. 主界面
  if (view === View.Main) {
    return (
      <PanelSection>
        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => setView(View.ScaleFactorMenu)}
          >
            Scale factor
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>
    );
  }

  // 2. Scale Factor 菜单
  if (view === View.ScaleFactorMenu) {
    return (
      <div>
        {renderHeader("Scale Factor", () => setView(View.Main))}
        <PanelSection>
          <PanelSectionRow>
            <ButtonItem
              layout="below"
              onClick={() => setView(View.Detail125)}
            >
              *1.25
            </ButtonItem>
          </PanelSectionRow>
        </PanelSection>
      </div>
    );
  }

  // 3. 详情页 (*1.25)
  if (view === View.Detail125) {
    const textToCopy = "--force-device-scale-factor=1.25";
    return (
      <div>
        {renderHeader("*1.25 Option", () => setView(View.ScaleFactorMenu))}
        <PanelSection>
          <PanelSectionRow>
            <TextField
              label="Launch Option"
              value={textToCopy}
              disabled={true} // 无法修改
              onChange={() => {}} // 必须提供 onChange 即使 disabled
            />
          </PanelSectionRow>
          <PanelSectionRow>
            <ButtonItem
              layout="below"
              onClick={() => copyToClipboard(textToCopy)}
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

  return null;
}

export default definePlugin(() => {
  return {
    name: "Decky Option",
    content: <Content />,
    icon: <FaTerminal />,
    onDismount() {
      // Cleanup if necessary
    },
  };
});