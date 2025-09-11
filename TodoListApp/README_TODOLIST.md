# 📝 TodoList React Native App

一個功能完整的待辦事項管理應用，使用 React Native 開發，支援深色模式和繁體中文介面。

## ✨ 功能特色

- ✅ **新增待辦事項** - 輕鬆添加新的待辦事項
- 🎯 **完成標記** - 點擊項目即可標記為完成
- 🗑️ **刪除功能** - 長按或點擊垃圾桶圖示刪除項目
- 🧹 **清除已完成** - 一鍵清除所有已完成的項目
- 🌗 **深色模式** - 自動適應系統深色/淺色模式
- 📊 **統計資訊** - 顯示總項目數和完成數量
- 📱 **響應式設計** - 適配不同螢幕尺寸
- 🇹🇼 **繁體中文** - 完整的中文介面

## 🎨 應用介面

### 主要功能區域：
1. **標題區** - 顯示應用名稱和統計資訊
2. **輸入區** - 新增待辦事項的輸入框和按鈕
3. **列表區** - 顯示所有待辦事項，支援滾動
4. **控制區** - 清除已完成項目的按鈕

### 互動設計：
- **新增項目**: 在輸入框輸入文字後按 "+" 按鈕或鍵盤確認鍵
- **標記完成**: 點擊待辦事項或勾選框
- **刪除項目**: 點擊右側垃圾桶圖示
- **清除已完成**: 點擊底部的"清除已完成"按鈕

## 🚀 開始使用

### 環境需求

- Node.js 14 或更高版本
- React Native CLI
- 用於 Android 開發：Android Studio 和 Android SDK
- 用於 iOS 開發：Xcode 和 CocoaPods（僅限 macOS）

### 安裝步驟

1. **進入專案目錄**
   ```bash
   cd TodoListApp
   ```

2. **安裝相依套件**
   ```bash
   npm install
   ```

3. **啟動 Metro 伺服器**
   ```bash
   npm start
   # 或者使用自訂端口
   npx react-native start --port 8082
   ```

4. **執行應用程式**

   **Android:**
   ```bash
   npx react-native run-android
   ```

   **iOS (僅限 macOS):**
   ```bash
   cd ios && bundle exec pod install && cd ..
   npx react-native run-ios
   ```

### 🔧 故障排除

#### Metro 伺服器端口被占用
如果遇到 "address already in use" 錯誤：
```bash
npx react-native start --port 8082
```

#### iOS CocoaPods 問題
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

#### Android 建置問題
確保 Android SDK 和 ANDROID_HOME 環境變數已正確設定。

## 📱 支援平台

- ✅ Android 5.0 (API 21) 及以上
- ✅ iOS 10.0 及以上

## 🎯 核心技術

- **React Native 0.81** - 跨平台移動應用開發框架
- **TypeScript** - 提供類型安全的 JavaScript
- **React Hooks** - 使用 useState 管理應用狀態
- **React Native APIs**:
  - `useColorScheme` - 深色模式檢測
  - `Alert` - 原生對話框
  - `ScrollView` - 滾動列表
  - `TouchableOpacity` - 觸控互動
  - `TextInput` - 文字輸入

## 🎨 UI/UX 設計特色

### 深色模式支援
- 自動檢測系統設定
- 動態切換顏色主題
- 保持良好的對比度和可讀性

### 互動回饋
- 觸控狀態視覺回饋
- 按鈕啟用/停用狀態
- 完成狀態視覺變化

### 中文本地化
- 繁體中文介面
- 本地化日期時間格式
- 符合中文使用習慣的提示訊息

## 📊 應用狀態管理

應用使用 React Hooks 進行狀態管理：

- `todos`: 待辦事項陣列
- `inputText`: 輸入框文字
- `isDarkMode`: 深色模式狀態
- 動態計算的統計資料（總數、完成數）

## 🔄 資料結構

```typescript
interface Todo {
  id: string;           // 唯一識別碼
  text: string;         // 待辦事項內容
  completed: boolean;   // 完成狀態
  createdAt: Date;     // 建立時間
}
```

## 📝 開發日誌

- ✅ 建立基礎 React Native 專案
- ✅ 實作待辦事項核心功能
- ✅ 加入深色模式支援
- ✅ 完成中文介面本地化
- ✅ 優化使用者體驗和互動設計
- ✅ 修正 TypeScript 類型錯誤
- ✅ 完成樣式系統重構

## 🚀 未來改進計畫

- 🔄 資料持久化 (AsyncStorage)
- 📂 分類和標籤功能
- 🔔 提醒通知
- 📤 資料匯出/匯入
- 🎨 更多主題選擇
- 🌐 多語言支援

## 📞 支援

如有問題或建議，歡迎提出 Issue 或聯繫開發團隊。

---

**Made with ❤️ using React Native**
