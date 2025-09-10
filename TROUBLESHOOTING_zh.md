# 🚨 故障排除指南

## 錯誤："todolist-react-native has not been registered"

### ✅ **已修復的問題**

1. **應用程式名稱不一致** - 已修復
   - `package.json` 和 `app.json` 中的名稱現在一致
   - 清理並重新安裝依賴

### 🚀 **解決步驟**

#### 1. 停止所有 Metro 進程
```bash
# 停止所有 Metro 進程
pkill -f metro
```

#### 2. 清理並重啟 Metro
```bash
# 清理快取並重啟 Metro
npx react-native start --reset-cache
```

#### 3. 在新終端中重新啟動應用
```bash
npm run macos
```

### 🔧 **如果問題持續存在**

#### 完整清理
```bash
# 清理所有快取和依賴
rm -rf node_modules package-lock.json
npm install

# 清理 Metro 快取
rm -rf /tmp/metro-*

# 清理平台快取
cd macos && rm -rf build && cd ..
cd ios && rm -rf build && cd ..
cd android && ./gradlew clean && cd ..

# 重啟 Metro
npm start
```

### 📝 **預防措施**

1. **保持名稱一致性**：確保 `package.json` 和 `app.json` 中的應用名稱相同
2. **定期清理快取**：每次遇到奇怪錯誤時先清理快取
3. **使用推薦的啟動方法**：先啟動 Metro，再啟動應用

## 常見錯誤解決方案

### 錯誤：端口 8081 已被占用
```bash
# 殺死占用端口的進程
lsof -ti:8081 | xargs kill -9

# 重新啟動 Metro
npm start
```

### 錯誤：無法連接到 Metro
1. 確認 Metro 正在運行（檢查端口 8081）
2. 重置快取：`npx react-native start --reset-cache`
3. 檢查防火牆設置

### 錯誤：應用崩潰或無法啟動
1. 檢查日誌輸出中的具體錯誤
2. 確認開發環境設置正確
3. 嘗試在不同設備/模擬器上運行

## 平台特定問題

### macOS 問題
- **Xcode 構建失敗**：清理構建文件夾並重新構建
- **CocoaPods 問題**：重新安裝 pods (`cd macos && pod install`)

### iOS 問題
- **模擬器無法啟動**：重啟 Xcode 和模擬器
- **簽名問題**：檢查開發者帳戶設置

### Android 問題
- **模擬器連接問題**：重啟 ADB (`adb kill-server && adb start-server`)
- **Gradle 構建失敗**：清理構建快取 (`cd android && ./gradlew clean`)

---

**記住：大多數問題都可以通過清理快取和重啟解決！** 🔄
