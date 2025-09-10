# 🚀 React Native App Launch Guide

## 📱 **Correct Launch Steps**

### ⚡ **Quick Start (Recommended)**

#### Method 1: Step-by-Step Launch (Most Stable)
```bash
# Step 1: Start Metro server (keep it running)
npm start

# Step 2: Launch app in a new terminal
npm run macos    # macOS Desktop App
npm run ios      # iOS App
npm run android  # Android App
```

#### Method 2: One-Command Launch
```bash
# Direct launch (automatically starts Metro)
npm run macos
```

## 🚨 **Fixing "No bundle URL present" Error**

### Root Causes
- Metro bundler server is not running
- App cannot connect to Metro server (port 8081)
- Cache issues

### ✅ **Solution Steps**

#### 1. Check Metro Server Status
```bash
# Check if port 8081 is occupied
lsof -ti:8081

# If there's output, port is occupied
# If no output, Metro is not running
```

#### 2. Start Metro Server
```bash
# Clean and start
npx react-native start --reset-cache

# Or simple start
npm start
```

#### 3. Restart the App
```bash
# In another terminal
npm run macos
```

## 🔧 **Advanced Troubleshooting**

### If App Still Cannot Connect

#### Clear Project Cache
```bash
# Clear all caches
npm run clean

# Manually clear Metro cache
rm -rf /tmp/metro-*
rm -rf /tmp/haste-*

# Clear Node modules
rm -rf node_modules package-lock.json
npm install
```

#### Platform-Specific Cache Clearing

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

## 📋 **Complete Development Workflow**

### 🛠️ **Development Environment Setup**

1. **Ensure Environment is Correct**
   ```bash
   npx react-native doctor
   ```

2. **Check Node Version**
   ```bash
   node --version  # Should be >= 16
   npm --version
   ```

### 🚀 **Daily Development Startup**

#### Terminal 1: Metro Server
```bash
cd /path/to/TodoListReactNative
npm start

# Keep this terminal running
# Metro will display:
# ┌──────────────────────────────────────────────────────────────────────────────┐
# │  Metro waiting on port 8081                                                 │
# └──────────────────────────────────────────────────────────────────────────────┘
```

#### Terminal 2: App Launch
```bash
cd /path/to/TodoListReactNative

# Choose platform to launch
npm run macos    # macOS Desktop App
npm run ios      # iOS Simulator
npm run android  # Android Emulator
```

### 🔄 **Useful Commands During Development**

In the Metro terminal, you can use these shortcuts:
- `r` - Reload the app
- `d` - Open developer menu
- `i` - Run in iOS simulator
- `a` - Run in Android emulator

## 🎯 **Platform-Specific Notes**

### macOS 🖥️
```bash
# Launch command
npm run macos

# If Xcode errors, try:
cd macos && xcodebuild clean && cd ..
npm run macos
```

### iOS 📱
```bash
# Launch command
npm run ios

# Specify specific simulator
npm run ios -- --simulator="iPhone 14"
```

### Android 🤖
```bash
# Launch command
npm run android

# Ensure Android emulator is running
# Or connect physical device with USB debugging enabled
```

## 🚨 **Common Errors and Solutions**

### 1. Metro Cannot Start
```bash
# Kill all Metro processes
pkill -f metro

# Clean and restart
npx react-native start --reset-cache
```

### 2. Port Already in Use
```bash
# Kill process occupying port 8081
lsof -ti:8081 | xargs kill -9

# Restart Metro
npm start
```

### 3. App Cannot Connect to Metro
```bash
# Reset cache and restart
npx react-native start --reset-cache

# Restart app in another terminal
npm run macos
```

### 4. Code Changes Not Reflected
- Press `r` in Metro terminal to reload
- Or use `Cmd+R` (macOS) in the app to reload

## 💡 **Best Practices**

### 🔄 **Development Workflow**
1. **Daily work startup:**
   ```bash
   npm start  # Start Metro
   npm run macos  # Start app
   ```

2. **After code changes:**
   - Hot reload updates automatically
   - Press `r` for manual reload if needed

3. **When encountering strange issues:**
   ```bash
   npx react-native start --reset-cache
   ```

### 📱 **Multi-Platform Development**
```bash
# When developing multiple platforms simultaneously
npm start  # Metro server

# Then launch different platforms in different terminals
npm run macos    # Terminal 2
npm run ios      # Terminal 3  
npm run android  # Terminal 4
```

## 🎉 **Signs of Successful Launch**

When everything works correctly, you'll see:

1. **Metro terminal displays:**
   ```
   Welcome to Metro v0.77.0
   Fast - Scalable - Integrated
   ```

2. **App terminal displays:**
   ```
   info Found Xcode workspace "todolist-react-native.xcworkspace"
   success Successfully launched the app
   ```

3. **App successfully opens and displays the Todo List interface**

---

## 🆘 **Still Having Issues?**

If the above steps still don't resolve the problem:

1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. Verify development environment setup is correct
3. Try reinitializing the project

**Remember: Most issues can be resolved by restarting the Metro server!** 🔄