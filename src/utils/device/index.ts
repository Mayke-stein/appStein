import {Dimensions, Platform, ScaledSize, StatusBar} from 'react-native';

// Default guideline sizes are based on standard ~5" screen mobile device
const STANDARD_HEIGHT = 680;

const getDimensions = (dim: 'window' | 'screen'): ScaledSize => {
  return Dimensions.get(dim);
};

const isIphoneX = () => {
  const {width, height} = getDimensions('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (height === 780 ||
      width === 780 ||
      height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  );
};

const scale = (size: number) => {
  const {height, width} = getDimensions('window');
  const standardLength = width > height ? width : height;

  let offset = 0;

  if (width > height) {
    offset = 0;
  } else {
    offset = Platform.OS === 'ios' ? 78 : StatusBar.currentHeight ?? 0;
  }

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (size * deviceHeight) / STANDARD_HEIGHT;

  return Math.floor(heightPercent);
};

const isIos = (): boolean => Platform.OS === 'ios';

export const DeviceUtils = {
  getDimensions,
  isIphoneX,
  scale,
  isIos,
};
