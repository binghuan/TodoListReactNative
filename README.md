# Todo List React Native App

A clean and elegant todo list application built with React Native, featuring task management, completion tracking, and data persistence functionality.

## ✨ Features

- 📝 **Add Tasks**: Easily add new todo items
- ✅ **Mark Complete**: Tap tasks to toggle completion status
- 🗑️ **Delete Tasks**: Long press or tap delete button to remove tasks
- 📊 **Statistics**: Real-time display of task completion progress
- 💾 **Data Persistence**: Automatic data saving using AsyncStorage
- 🎨 **Modern UI**: Beautiful gradient colors and smooth animations
- 📱 **Cross-Platform Support**: Support for iOS, Android, Windows and macOS platforms

## 📸 App Preview

![Todo List App Screenshot](./README/illustration.png)

### Main Features
- Intuitive task list interface
- Real-time completion progress statistics
- Elegant empty state prompts
- Smooth interactive experience

### Supported Platforms
- **iOS** 📱 - Native iOS experience
- **Android** 🤖 - Material Design style
- **Windows** 💻 - UWP application
- **macOS** 🖥️ - Native macOS application

## 🛠️ Tech Stack

### Core Technologies
- **React Native 0.81.4** - Cross-platform mobile and desktop app development framework
- **React 19.1.0** - User interface library
- **AsyncStorage 2.2.0** - Local data storage
- **JavaScript ES6+** - Modern JavaScript syntax

### Development Tools
- **Metro Bundler** - JavaScript bundler
- **Babel** - JavaScript compiler
- **ESLint** - Code quality checker
- **Prettier** - Code formatter

## 📦 Installation and Setup

### Prerequisites

Before you begin, make sure you have the following software installed:

#### Basic Requirements
- **Node.js** >= 20.19.4
- **npm** or **yarn**
- **React Native CLI**

#### iOS Development (macOS required)
- **Xcode** >= 16.1
- **iOS Simulator**
- **CocoaPods**

#### Android Development
- **Android Studio**
- **Android SDK**
- **Java Development Kit (JDK) 17**

#### Windows Desktop Development
- **Visual Studio 2019/2022** with UWP workload

#### macOS Desktop Development
- **Xcode** (on macOS)
- **CocoaPods**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/TodoListReactNative.git
   cd TodoListReactNative
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **macOS Setup** (macOS only)
   ```bash
   cd macos && pod install && cd ..
   ```

## 🚀 Running the Application

### Development Mode

#### Method 1: Step-by-Step Launch (Recommended)
```bash
# Step 1: Start Metro server
npm start

# Step 2: Launch app in new terminal
npm run ios      # iOS
npm run android  # Android  
npm run macos    # macOS
```

#### Method 2: Direct Launch
```bash
npm run ios      # iOS
npm run android  # Android
npm run macos    # macOS
```

### Platform-Specific Instructions

#### Android
```bash
npm run android
# or
yarn android
```

#### iOS (macOS only)
> 📱 **iOS development requires macOS system and Xcode**

**Prerequisites:**
- macOS system
- Xcode installed (download from App Store)
- CocoaPods dependencies installed

**First-time setup:**
```bash
# Install iOS dependencies
cd ios && pod install && cd ..
```

**Method 1: Using separate terminals (Recommended)**
```bash
# Terminal 1: Start Metro bundler
npm start

# Terminal 2: Start iOS simulator
npm run ios
```

**Method 2: Specify simulator device**
```bash
# List available simulators
xcrun simctl list devices

# Specify specific simulator (e.g., iPhone 15)
npx react-native run-ios --simulator="iPhone 15"

# Specify specific iOS version
npx react-native run-ios --simulator="iPhone 15" --version="17.0"
```

**Method 3: Using Xcode**
```bash
# Open Xcode workspace
open ios/TodoListReactNative.xcworkspace
# Then select target device in Xcode and press ⌘+R to run
```

**Method 4: Running on physical device**
```bash
# Connect iPhone to Mac, and select your device in Xcode
npx react-native run-ios --device
```

**🔧 If you encounter issues:**
- Ensure latest version of Xcode is installed
- Accept Xcode license: `sudo xcodebuild -license`
- Reinstall Pods: `cd ios && pod install --repo-update && cd ..`

#### Windows
```bash
npm run windows
# or
yarn windows
```

#### macOS
> 📱 **macOS support requires completing Desktop Setup steps first**

**Method 1: Using separate terminals (Recommended)**
```bash
# Terminal 1: Start Metro bundler
npm start

# Terminal 2: Start macOS app
npm run macos
```

**Method 2: One-click launch (auto-handles Metro)**
```bash
npx react-native run-macos
```

**Method 3: Using Xcode**
```bash
# Open Xcode workspace
open macos/todolist-react-native.xcworkspace
# Then press ⌘+R in Xcode to build and run
```

**🔧 If you encounter "No bundle URL present" error:**
1. Ensure Metro bundler is running (Terminal 1)
2. Press `r` in Metro terminal to reload app
3. Or restart the application

### Production Builds

#### iOS Release
```bash
npm run ios -- --configuration Release
```

#### Android APK
```bash
cd android
./gradlew assembleRelease
```

#### Windows Release
```bash
npm run build:windows
```

#### macOS Release
```bash
npm run build:macos
```

## 📁 Project Structure

```
TodoListReactNative/
├── App.js                 # Main application component
├── index.js               # Application entry point
├── package.json           # Project dependencies and scripts
├── app.json              # React Native configuration
├── babel.config.js       # Babel configuration
├── metro.config.js       # Metro bundler configuration
└── README.md             # Project documentation
```

## 📱 Component Features

### 🎯 Main Components

#### `App.js` - Main Application Component
- State management (using React Hooks)
- Task CRUD operations
- Data persistence logic
- UI rendering and event handling

#### `TodoItem` - Task Item Component
- Task display and interaction
- Completion status toggle
- Delete functionality

#### `Statistics` - Statistics Component
- Real-time progress calculation
- Visual completion indicators

### 🎨 Design System

#### Color Scheme
```javascript
const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f093fb',
  background: '#f8f9fa',
  surface: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  success: '#28a745',
  danger: '#dc3545'
};
```

#### Typography System
- Headings: 24px, Bold
- Subheadings: 18px, Medium
- Body: 16px, Regular
- Caption: 14px, Regular

#### Spacing System
- Small: 8px
- Medium: 16px  
- Large: 24px
- Extra Large: 32px

## 📚 API Reference

### Main State

```javascript
const [todos, setTodos] = useState([]);
const [inputText, setInputText] = useState('');
const [editingId, setEditingId] = useState(null);
```

### Core Functions

#### `addTodo(text)`
Add new task to the list

#### `toggleTodo(id)`
Toggle task completion status

#### `deleteTodo(id)`
Delete task from the list

#### `editTodo(id, newText)`
Edit existing task text

#### `saveData()`
Save tasks to AsyncStorage

#### `loadData()`
Load tasks from AsyncStorage

## 🔧 Configuration

### App Configuration

#### `app.json`
```json
{
  "name": "TodoListReactNative",
  "displayName": "Todo List",
  "version": "1.0.0"
}
```

#### `package.json` Scripts
```json
{
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "macos": "react-native run-macos",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

## 🎨 Customization

### Change Theme Colors

1. Find the `colors` object in `App.js`
2. Modify the desired color values
3. Restart the app to see changes

```javascript
const colors = {
  primary: '#your-primary-color',
  secondary: '#your-secondary-color',
  // ... other colors
};
```

### Add New Features

1. **Task Categories**
   ```javascript
   const [categories, setCategories] = useState(['Work', 'Personal', 'Shopping']);
   ```

2. **Due Dates**
   ```javascript
   const addTodo = (text, dueDate) => {
     // Add due date logic
   };
   ```

3. **Priority Levels**
   ```javascript
   const [priority, setPriority] = useState('medium');
   ```

## 🐛 Troubleshooting

### Common Issues

#### 1. Metro Server Won't Start
```bash
# Clean cache and restart
npx react-native start --reset-cache
```

#### 2. iOS Build Failures
```bash
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
```

#### 3. Android Build Failures
```bash
cd android
./gradlew clean
cd ..
```

#### 4. App Name Registration Error
Ensure app names in `app.json` and related config files are consistent.

#### 5. iOS Boost Verification Error (Common Issue)
If you encounter:
```
Error installing boost
Verification checksum was incorrect, expected f0397ba..., got 9c2f4b...
```

**Solutions:**
```bash
# Method 1: Disable Flipper (Recommended)
export NO_FLIPPER=1
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..

# Method 2: Clean CocoaPods cache
pod cache clean --all
cd ios && pod install

# Method 3: Use Xcode project file directly
open ios/TodoListReactNative.xcodeproj
```

#### 6. iOS Simulator Won't Start
```bash
# Reset simulator
xcrun simctl erase all

# Restart simulator
npx react-native run-ios --simulator="iPhone 15"
```

#### 7. Xcode License Issues
```bash
# Accept Xcode license
sudo xcodebuild -license accept
```

#### 8. macOS "No bundle URL present" Error
```bash
# Ensure Metro bundler is running
npm start

# Restart macOS app in another terminal
npm run macos
```

#### 9. "Too many open files" Error
```bash
# Install watchman to solve file monitoring issues
brew install watchman

# Restart Metro bundler
npm start --reset-cache
```

### Getting Help

If you encounter issues:

1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed troubleshooting guide
2. See [LAUNCH_GUIDE.md](LAUNCH_GUIDE.md) for launch instructions
3. Ensure your development environment is set up correctly

## 🏗️ Build and Deploy

### Development Builds

Use the above `npm run` commands for development builds.

### Production Builds

#### iOS App Store
1. Open project in Xcode
2. Select "Generic iOS Device"
3. Product > Archive
4. Upload to App Store Connect

#### Google Play Store
```bash
cd android
./gradlew bundleRelease
```
Upload AAB file to Google Play Console.

#### Windows Store
```bash
npm run build:windows
```
Use Visual Studio to create and upload APPX package.

#### macOS App Store
1. Open macOS project in Xcode
2. Product > Archive
3. Upload to Mac App Store

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

1. **Code Style**: Follow ESLint configuration
2. **Commit Messages**: Use clear commit messages
3. **Testing**: Ensure all tests pass
4. **Documentation**: Update relevant documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/) - Cross-platform framework
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Local storage
- [React](https://reactjs.org/) - UI library

## 📧 Contact

For questions or suggestions, please contact:

- **GitHub Issues**: [Project Issues](https://github.com/yourusername/TodoListReactNative/issues)
- **Email**: your.email@example.com

---

**Built with React Native 0.81.4 🚀**

Enjoy developing your cross-platform Todo List app!