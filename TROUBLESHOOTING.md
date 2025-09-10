# 🚨 Troubleshooting Guide

## Error: "todolist-react-native has not been registered"

### ✅ **Fixed Issues**

1. **Application Name Inconsistency** - Fixed
   - Names in `package.json` and `app.json` are now consistent
   - Cleaned and reinstalled dependencies

### 🚀 **Solution Steps**

#### 1. Stop All Metro Processes
```bash
# Stop all Metro processes
pkill -f metro
```

#### 2. Clean and Restart Metro
```bash
# Clean cache and restart Metro
npx react-native start --reset-cache
```

#### 3. Restart App in New Terminal
```bash
npm run macos
```

### 🔧 **If Problem Persists**

#### Complete Cleanup
```bash
# Clean all caches and dependencies
rm -rf node_modules package-lock.json
npm install

# Clean Metro cache
rm -rf /tmp/metro-*

# Clean platform caches
cd macos && rm -rf build && cd ..
cd ios && rm -rf build && cd ..
cd android && ./gradlew clean && cd ..

# Restart Metro
npm start
```

### 📝 **Prevention Measures**

1. **Maintain Name Consistency**: Ensure app names in `package.json` and `app.json` match
2. **Regular Cache Cleanup**: Clean caches first when encountering strange errors
3. **Use Recommended Launch Method**: Start Metro first, then launch app

## Common Error Solutions

### Error: Port 8081 Already in Use
```bash
# Kill process occupying the port
lsof -ti:8081 | xargs kill -9

# Restart Metro
npm start
```

### Error: Cannot Connect to Metro
1. Confirm Metro is running (check port 8081)
2. Reset cache: `npx react-native start --reset-cache`
3. Check firewall settings

### Error: App Crashes or Won't Start
1. Check log output for specific errors
2. Confirm development environment is set up correctly
3. Try running on different device/simulator

## Platform-Specific Issues

### macOS Issues
- **Xcode Build Failure**: Clean build folder and rebuild
- **CocoaPods Issues**: Reinstall pods (`cd macos && pod install`)

### iOS Issues
- **Simulator Won't Start**: Restart Xcode and simulator
- **Signing Issues**: Check developer account settings

### Android Issues
- **Emulator Connection Issues**: Restart ADB (`adb kill-server && adb start-server`)
- **Gradle Build Failure**: Clean build cache (`cd android && ./gradlew clean`)

---

**Remember: Most issues can be resolved by cleaning cache and restarting!** 🔄