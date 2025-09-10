# 🚀 React Native 應用啟動指南

## 📱 **正確的啟動步驟**

### ⚡ **快速啟動（推薦方法）**

#### 方法一：分步啟動（最穩定）
```bash
# 步驟 1: 啟動 Metro 服務器（保持運行）
npm start

# 步驟 2: 在新終端中啟動應用
npm run macos    # macOS 桌面應用
npm run ios      # iOS 應用
npm run android  # Android 應用
```

#### 方法二：一鍵啟動
```bash
# 直接啟動（會自動啟動 Metro）
npm run macos
```

## 🚨 **"No bundle URL present" 錯誤解決**

### 錯誤原因
- Metro bundler 服務器沒有運行
- 應用無法連接到 Metro 服務器（端口 8081）
- 快取問題

### ✅ **解決步驟**

#### 1. 檢查 Metro 服務器狀態
```bash
# 檢查 8081 端口是否被占用
lsof -ti:8081

# 如果有輸出，表示端口被占用
# 如果沒有輸出，表示 Metro 沒有運行
```

#### 2. 啟動 Metro 服務器
```bash
# 清理並啟動
npx react-native start --reset-cache

# 或者簡單啟動
npm start
```

#### 3. 重新啟動應用
```bash
# 在另一個終端中
npm run macos
```

## 🔧 **進階故障排除**

### 如果應用仍然無法連接

#### 清理項目快取
```bash
# 清理所有快取
npm run clean

# 手動清理 Metro 快取
rm -rf /tmp/metro-*
rm -rf /tmp/haste-*

# 清理 Node 模組
rm -rf node_modules package-lock.json
npm install
```

#### 清理平台特定快取

**macOS:**
```bash
cd macos
rm -rf Pods Podfile.lock build
pod install
cd ..
```

**iOS:**
```bash
cd ios
rm -rf Pods Podfile.lock build
pod install
cd ..
```

**Android:**
```bash
cd android
./gradlew clean
cd ..
```

## 📋 **完整的開發工作流程**

### 🛠️ **開發環境設置**

1. **確保環境正確**
   ```bash
   npx react-native doctor
   ```

2. **檢查 Node 版本**
   ```bash
   node --version  # 應該 >= 16
   npm --version
   ```

### 🚀 **日常開發啟動**

#### 終端 1: Metro 服務器
```bash
cd /path/to/TodoListReactNative
npm start

# 保持這個終端運行
# Metro 會顯示：
# ┌──────────────────────────────────────────────────────────────────────────────┐
# │  Metro waiting on port 8081                                                 │
# └──────────────────────────────────────────────────────────────────────────────┘
```

#### 終端 2: 應用啟動
```bash
cd /path/to/TodoListReactNative

# 選擇平台啟動
npm run macos    # macOS 桌面應用
npm run ios      # iOS 模擬器
npm run android  # Android 模擬器
```

### 🔄 **開發過程中的常用命令**

在 Metro 終端中，您可以使用這些快捷鍵：
- `r` - 重新載入應用
- `d` - 開啟開發者選單
- `i` - 在 iOS 模擬器中運行
- `a` - 在 Android 模擬器中運行

## 🎯 **各平台特定注意事項**

### macOS 🖥️
```bash
# 啟動命令
npm run macos

# 如果 Xcode 報錯，嘗試：
cd macos && xcodebuild clean && cd ..
npm run macos
```

### iOS 📱
```bash
# 啟動命令
npm run ios

# 指定特定模擬器
npm run ios -- --simulator="iPhone 14"
```

### Android 🤖
```bash
# 啟動命令
npm run android

# 確保 Android 模擬器正在運行
# 或連接實體設備並啟用 USB 調試
```

## 🚨 **常見錯誤和解決方案**

### 1. Metro 無法啟動
```bash
# 殺死所有 Metro 進程
pkill -f metro

# 清理並重啟
npx react-native start --reset-cache
```

### 2. 端口被占用
```bash
# 殺死占用 8081 端口的進程
lsof -ti:8081 | xargs kill -9

# 重新啟動 Metro
npm start
```

### 3. 應用無法連接到 Metro
```bash
# 重置快取並重啟
npx react-native start --reset-cache

# 在另一終端重啟應用
npm run macos
```

### 4. 代碼更改沒有反映
- 在 Metro 終端按 `r` 重新載入
- 或在應用中使用 `Cmd+R` (macOS) 重新載入

## 💡 **最佳實踐**

### 🔄 **開發時的工作流程**
1. **每天開始工作時：**
   ```bash
   npm start  # 啟動 Metro
   npm run macos  # 啟動應用
   ```

2. **代碼修改後：**
   - 熱重載會自動更新
   - 如需要，按 `r` 手動重載

3. **遇到奇怪問題時：**
   ```bash
   npx react-native start --reset-cache
   ```

### 📱 **多平台開發**
```bash
# 同時開發多平台時
npm start  # Metro 服務器

# 然後可以在不同終端啟動不同平台
npm run macos    # 終端 2
npm run ios      # 終端 3  
npm run android  # 終端 4
```

## 🎉 **成功啟動的標誌**

當一切正常時，您會看到：

1. **Metro 終端顯示：**
   ```
   Welcome to Metro v0.77.0
   Fast - Scalable - Integrated
   ```

2. **應用終端顯示：**
   ```
   info Found Xcode workspace "todolist-react-native.xcworkspace"
   success Successfully launched the app
   ```

3. **應用成功打開並顯示 Todo List 介面**

---

## 🆘 **仍然有問題？**

如果按照以上步驟仍然無法解決問題：

1. 檢查 [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. 確認開發環境設置正確
3. 嘗試重新初始化項目

**記住：大多數問題都可以通過重啟 Metro 服務器解決！** 🔄
