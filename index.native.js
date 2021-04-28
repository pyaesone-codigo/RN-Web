/**
 * @format
 */

import {AppRegistry} from 'react-native';
import NativeApp from './src/NativeApp';
import {name as appName} from './src/app.json';

AppRegistry.registerComponent(appName, () => NativeApp);
