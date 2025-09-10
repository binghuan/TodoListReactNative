# 🖥️ Desktop Support Setup Guide

This guide will help you set up desktop support for your React Native Todo List app using React Native for Windows and macOS.

## 📋 Prerequisites

### For Windows Development
- **Windows 10/11** (version 1903 or higher)
- **Visual Studio 2019** or **Visual Studio 2022** with:
  - Universal Windows Platform development workload
  - C++ (v143) Universal Windows Platform tools
- **Node.js** (version >= 16)
- **React Native CLI**

### For macOS Development
- **macOS 10.15** or higher
- **Xcode 12** or higher
- **Node.js** (version >= 16)
- **CocoaPods**

## 🚀 Setup Instructions

### 1. Initialize Desktop Projects

#### For Windows:
```bash
# Navigate to your project directory
cd TodoListReactNative

# Initialize React Native Windows
npx react-native-windows-init --overwrite --version ^0.72.0

# Install dependencies
npm install
```

#### For macOS:
```bash
# Navigate to your project directory
cd TodoListReactNative

# Initialize React Native macOS  
npx react-native-macos-init --version ^0.72.0

# Install dependencies
npm install

# Install CocoaPods dependencies
cd macos && pod install && cd ..
```

### 2. Platform-Specific Code Adjustments

Create platform-specific components if needed:

#### Create `App.desktop.js` (optional):
```javascript
import React from 'react';
import { Platform } from 'react-native';
import App from './App';

const DesktopApp = () => {
  // Add desktop-specific modifications here
  return <App />;
};

export default DesktopApp;
```

### 3. Running Desktop Applications

#### Windows:
```bash
# Development mode
npm run windows

# Release mode
npm run build:windows
```

#### macOS:
```bash
# Development mode
npm run macos

# Release mode
npm run build:macos
```

## 🔧 Configuration Options

### Windows Configuration

Edit `windows/TodoListReactNative/Package.appxmanifest` to customize:
- App name and description
- Icons and splash screens
- Permissions and capabilities

### macOS Configuration

Edit `macos/TodoListReactNative/Info.plist` to customize:
- Bundle identifier
- App icons
- Minimum system version

## 🎨 Desktop UI Considerations

### Layout Adjustments
The mobile UI might need adjustments for desktop:

```javascript
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const isDesktop = Platform.OS === 'windows' || Platform.OS === 'macos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: isDesktop ? 600 : '100%', // Limit width on desktop
    alignSelf: 'center',
    backgroundColor: '#f8fafc',
  },
  // ... other styles
});
```

### Keyboard Shortcuts
Add desktop keyboard shortcuts:

```javascript
import { useEffect } from 'react';

const useKeyboardShortcuts = (onAddTodo, onClearCompleted) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (Platform.OS === 'windows' || Platform.OS === 'macos') {
        // Ctrl/Cmd + N for new todo
        if ((event.ctrlKey || event.metaKey) && event.key === 'n') {
          event.preventDefault();
          onAddTodo();
        }
        // Ctrl/Cmd + Shift + C for clear completed
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'c') {
          event.preventDefault();
          onClearCompleted();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onAddTodo, onClearCompleted]);
};
```

## 📦 Building for Distribution

### Windows Store Package
```bash
# Create package for Windows Store
npx react-native run-windows --release --logging
```

### macOS App Store Package
```bash
# Build for Mac App Store
npx react-native run-macos --configuration Release
```

## 🐛 Common Issues

### Windows Issues

1. **Build fails with C++ errors**
   ```bash
   # Ensure Visual Studio C++ tools are installed
   # Restart command prompt as administrator
   ```

2. **Metro bundler conflicts**
   ```bash
   npx react-native start --reset-cache
   ```

### macOS Issues

1. **Pod install fails**
   ```bash
   cd macos
   pod install --repo-update
   cd ..
   ```

2. **Xcode build errors**
   - Ensure Xcode command line tools are installed
   - Clean build folder in Xcode (Cmd + Shift + K)

## 🌐 Cross-Platform Considerations

### AsyncStorage Compatibility
The AsyncStorage library works across all platforms, but consider using platform-specific storage for better integration:

- **Windows**: Windows Storage APIs
- **macOS**: NSUserDefaults
- **Web**: localStorage

### File System Access
For desktop-specific features like file import/export:

```javascript
import { Platform } from 'react-native';

const exportTodos = async (todos) => {
  if (Platform.OS === 'windows' || Platform.OS === 'macos') {
    // Use desktop file system APIs
    // Implementation depends on your needs
  }
};
```

## 🚀 Advanced Features

### Menu Bar Integration (macOS)
```javascript
// Add native menu bar support
import { NativeModules } from 'react-native';

const { MenuBarModule } = NativeModules;

// Create menu items
MenuBarModule?.createMenu([
  { title: 'New Todo', shortcut: 'Cmd+N' },
  { title: 'Clear Completed', shortcut: 'Cmd+Shift+C' }
]);
```

### System Notifications
```javascript
import { Alert, Platform } from 'react-native';

const showNotification = (title, message) => {
  if (Platform.OS === 'windows' || Platform.OS === 'macos') {
    // Use native notification APIs
    Alert.alert(title, message);
  }
};
```

## 📚 Additional Resources

- [React Native for Windows Documentation](https://microsoft.github.io/react-native-windows/)
- [React Native for macOS Documentation](https://microsoft.github.io/react-native-windows/docs/rnm-getting-started)
- [Platform-Specific Code Guide](https://reactnative.dev/docs/platform-specific-code)

## 🤝 Platform Support Matrix

| Platform | Status | Notes |
|----------|--------|-------|
| iOS | ✅ Full Support | Original React Native |
| Android | ✅ Full Support | Original React Native |
| Windows | ✅ Full Support | Microsoft maintained |
| macOS | ✅ Full Support | Microsoft maintained |
| Web | 🔄 Beta Support | Via React Native Web |
| Linux | ❌ Community | Third-party solutions |

---

**Happy Desktop Development! 🖥️**
