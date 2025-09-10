# Todo List React Native 應用程式

一個使用 React Native 構建的乾淨優雅的待辦事項列表應用，具有任務管理、完成追蹤和數據持久化功能。

## ✨ 功能特色

- 📝 **添加任務**: 輕鬆添加新的待辦事項
- ✅ **標記完成**: 點擊任務以切換完成狀態
- 🗑️ **刪除任務**: 長按或點擊刪除按鈕移除任務
- 📊 **統計資料**: 實時顯示任務完成進度
- 💾 **數據持久化**: 使用 AsyncStorage 自動保存數據
- 🎨 **現代化介面**: 美麗的漸變色彩和流暢動畫
- 📱 **跨平台支援**: 支援 iOS、Android、Windows 和 macOS 平台

## 📸 應用程式預覽

![待辦事項應用程式截圖](./README/illustration.png)

### 主要功能
- 直觀的任務列表介面
- 實時完成進度統計
- 優雅的空狀態提示
- 流暢的動畫效果

### 支援的平台
- **iOS** 📱 - 原生 iOS 體驗
- **Android** 🤖 - Material Design 風格
- **Windows** 💻 - UWP 應用程式
- **macOS** 🖥️ - 原生 macOS 應用程式

## 🛠️ 技術規格

### 核心技術
- **React Native 0.81.4** - 跨平台移動和桌面應用開發框架
- **React 19.1.0** - 用戶介面程式庫
- **AsyncStorage 2.2.0** - 本地數據儲存
- **JavaScript ES6+** - 現代 JavaScript 語法

### 開發工具
- **Metro Bundler** - JavaScript 打包工具
- **Babel** - JavaScript 編譯器
- **ESLint** - 代碼規範檢查
- **Prettier** - 代碼格式化

## 📦 安裝和設置

### 先決條件

確保您已安裝以下軟體：

#### 基本需求
- **Node.js** >= 20.19.4
- **npm** 或 **yarn**
- **React Native CLI**

#### iOS 開發 (需要 macOS)
- **Xcode** >= 16.1
- **iOS Simulator**
- **CocoaPods**

#### Android 開發
- **Android Studio**
- **Android SDK**
- **Java Development Kit (JDK) 17**

#### Windows 桌面開發
- **Visual Studio 2019/2022** 包含 UWP workload

#### macOS 桌面開發
- **Xcode** (在 macOS 上)
- **CocoaPods**

### 快速開始

1. **克隆儲存庫**
   ```bash
   git clone https://github.com/yourusername/TodoListReactNative.git
   cd TodoListReactNative
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **iOS 設置** (僅限 macOS)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **macOS 設置** (僅限 macOS)
   ```bash
   cd macos && pod install && cd ..
   ```

## 🚀 運行應用程式

### 開發模式

#### 方法一：分步啟動（推薦）
```bash
# 步驟 1: 啟動 Metro 服務器
npm start

# 步驟 2: 在新終端中啟動應用
npm run ios      # iOS
npm run android  # Android  
npm run macos    # macOS
```

#### 方法二：直接啟動
```bash
npm run ios      # iOS
npm run android  # Android
npm run macos    # macOS
```

### 生產構建

#### iOS 發布版本
```bash
npm run ios -- --configuration Release
```

#### Android APK
```bash
cd android
./gradlew assembleRelease
```

#### Windows 發布版本
```bash
npm run build:windows
```

#### macOS 發布版本
```bash
npm run build:macos
```

## 🚨 故障排除

### 常見問題

#### 1. Metro 無法啟動
```bash
# 清理快取並重啟
npx react-native start --reset-cache
```

#### 2. iOS 構建失敗
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

#### 3. Android 構建失敗
```bash
cd android
./gradlew clean
cd ..
```

### 獲得幫助

如果您遇到問題：

1. 檢查 [TROUBLESHOOTING_zh.md](TROUBLESHOOTING_zh.md) 詳細故障排除指南
2. 查看 [LAUNCH_GUIDE_zh.md](LAUNCH_GUIDE_zh.md) 啟動指南  
3. 確認您的開發環境設置正確

## 🤝 貢獻

歡迎貢獻！請：

1. Fork 這個儲存庫
2. 創建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟一個 Pull Request

## 📄 授權

此項目使用 MIT 授權 - 詳情請參閱 [LICENSE](LICENSE) 文件。

## 🙏 致謝

- [React Native](https://reactnative.dev/) - 跨平台框架
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - 本地儲存
- [React](https://reactjs.org/) - 用戶介面程式庫

---

**使用 React Native 0.81.4 構建 🚀**

享受您的跨平台 Todo List 應用程式開發！
