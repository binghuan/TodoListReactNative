# 🖥️ 桌面支援設置指南

本指南將幫助您為 React Native Todo List 應用設置桌面支援，使用 React Native for Windows 和 macOS。

## 📋 先決條件

### Windows 開發環境
- **Windows 10/11** (版本 1903 或更高)
- **Visual Studio 2019** 或 **Visual Studio 2022**，包含：
  - Universal Windows Platform development workload
  - C++ (v143) Universal Windows Platform tools
- **Node.js** (版本 >= 16)
- **React Native CLI**

### macOS 開發環境
- **macOS 10.15** (Catalina) 或更高
- **Xcode 12** 或更新版本
- **Node.js** (版本 >= 16)
- **CocoaPods** (iOS/macOS 依賴管理器)
- **React Native CLI**

## 🏗️ 項目設置

### 第一步：安裝依賴

```bash
# 安裝基礎依賴
npm install

# 安裝桌面特定依賴
npm install react-native-windows react-native-macos
```

### 第二步：初始化桌面平台

#### Windows 初始化
```bash
# 添加 Windows 支援
npx react-native-windows-init --overwrite

# 驗證 Windows 項目結構
ls windows/
```

#### macOS 初始化
```bash
# 添加 macOS 支援  
npx react-native-macos-init

# 安裝 macOS CocoaPods 依賴
cd macos && pod install && cd ..
```

### 第三步：更新 package.json 腳本

```json
{
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios", 
    "windows": "react-native run-windows",
    "macos": "react-native run-macos",
    "start": "react-native start"
  }
}
```

## 🚀 運行桌面應用

### Windows 應用
```bash
# 開發模式運行
npm run windows

# 指定架構 (可選)
npm run windows -- --arch x64

# 發布版本
npm run windows -- --configuration Release
```

### macOS 應用  
```bash
# 開發模式運行
npm run macos

# 指定特定方案 (可選)
npm run macos -- --scheme TodoListReactNative

# 發布版本  
npm run macos -- --configuration Release
```

## 🔧 故障排除

### Windows 常見問題

#### Visual Studio 配置問題
```bash
# 確保安裝了正確的 workloads
# 在 Visual Studio Installer 中檢查：
# - Universal Windows Platform development
# - C++ (v143) Universal Windows Platform tools
```

#### PowerShell 執行策略
```powershell
# 如果遇到執行策略問題
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### NuGet 包恢復錯誤
```bash
# 清理並恢復包
cd windows
nuget restore
cd ..
```

### macOS 常見問題

#### CocoaPods 問題
```bash
# 重新安裝 pods
cd macos  
rm -rf Pods Podfile.lock
pod install
cd ..
```

#### Xcode 構建錯誤
```bash
# 清理 Xcode 構建快取
cd macos
xcodebuild clean -workspace todolist-react-native.xcworkspace -scheme todolist-react-native-macOS
cd ..
```

#### 代碼簽名問題
```bash
# 在 Xcode 中檢查簽名設置：
# Project Settings > Signing & Capabilities
# 確保選擇了有效的開發團隊
```

## 📱 平台特定配置

### Windows UWP 配置

**應用清單 (windows/TodoListReactNative/Package.appxmanifest)**
```xml
<Applications>
  <Application Id="App"
    DisplayName="Todo List"
    Description="A Todo List app built with React Native"
    BackgroundColor="transparent">
    <uap:DefaultTile DisplayName="Todo List" />
  </Application>
</Applications>
```

### macOS 應用配置

**Info.plist (macos/todolist-react-native-macOS/Info.plist)**
```xml
<dict>
  <key>CFBundleDisplayName</key>
  <string>Todo List</string>
  <key>CFBundleIdentifier</key>
  <string>com.yourcompany.todolist</string>
  <key>NSAppTransportSecurity</key>
  <dict>
    <key>NSAllowsLocalNetworking</key>
    <true/>
  </dict>
</dict>
```

## 🎨 UI 適配

### 桌面特定樣式
```javascript
// DesktopStyles.js
import { Platform } from 'react-native';

const desktopStyles = Platform.select({
  windows: {
    // Windows 特定樣式
    titleBar: {
      height: 32,
      backgroundColor: '#0078D4'
    }
  },
  macos: {
    // macOS 特定樣式  
    titleBar: {
      height: 28,
      backgroundColor: '#007AFF'
    }
  },
  default: {}
});

export default desktopStyles;
```

### 響應式設計
```javascript
// ResponsiveDesign.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const isDesktop = width >= 768;
const isMobile = width < 768;

export const getResponsiveStyles = () => ({
  container: {
    maxWidth: isDesktop ? 800 : '100%',
    padding: isDesktop ? 40 : 20
  },
  sidebar: {
    display: isDesktop ? 'flex' : 'none'
  }
});
```

## 🏗️ 構建和部署

### Windows 應用包
```bash
# 創建 APPX 包
npm run windows -- --configuration Release

# 包位置：
# windows/TodoListReactNative/AppPackages/
```

### macOS 應用包
```bash
# 構建發布版本
npm run macos -- --configuration Release

# 創建 .app 包：
# macos/build/Build/Products/Release/todolist-react-native.app
```

## 📋 開發工作流程

### 每日開發設置
```bash
# 1. 啟動 Metro bundler
npm start

# 2. 在新終端中運行桌面應用
npm run windows  # 或
npm run macos
```

### 調試桌面應用
```bash
# 啟用調試模式
npm run windows -- --logging
npm run macos -- --verbose
```

## 🌟 最佳實踐

### 1. 平台檢測
```javascript
import { Platform } from 'react-native';

const isWindows = Platform.OS === 'windows';
const isMacOS = Platform.OS === 'macos';
const isDesktop = isWindows || isMacOS;
```

### 2. 條件導入
```javascript
// 僅在桌面平台導入特定模組
let DesktopModule;
if (Platform.OS === 'windows' || Platform.OS === 'macos') {
  DesktopModule = require('./DesktopModule');
}
```

### 3. 窗口管理
```javascript
// 設置桌面窗口大小
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const minWidth = 600;
const minHeight = 400;
```

## 📚 進階主題

### 原生模組整合
- 使用 Windows WinRT APIs
- 整合 macOS 系統服務
- 文件系統訪問
- 系統通知

### 性能優化
- 桌面特定的渲染優化
- 大螢幕佈局優化
- 記憶體管理

---

## 🎉 成功！

完成以上步驟後，您的 React Native Todo List 應用將支援：

- ✅ **Windows 10/11** (UWP 應用)
- ✅ **macOS** (原生 macOS 應用)
- ✅ **跨平台數據同步**
- ✅ **原生桌面體驗**

您的應用現在真正實現了跨平台：**移動端 + 桌面端**！ 🚀
