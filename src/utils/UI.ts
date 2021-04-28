import {Dimensions, Platform} from 'react-native';

const dimension = Dimensions.get('window');

const {width, height} = dimension;

const IS_WEB = Platform.OS === 'web';

const COLORS = {
  RED: '#db014d',
};

export {height as HEIGHT, width as WIDTH, COLORS, IS_WEB};
