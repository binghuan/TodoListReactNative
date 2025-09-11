import {AppRegistry, Platform} from 'react-native';
import App from './App';
import AppWindows from './App.windows';
import {name as appName} from './app.json';

const AppComponent = Platform.OS === 'windows' ? AppWindows : App;

AppRegistry.registerComponent(appName, () => AppComponent);
