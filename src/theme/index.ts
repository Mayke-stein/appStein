import {DeviceUtils} from '../utils/device';

const gutterSize = DeviceUtils.scale(32);
const paddingColumn = gutterSize / 2;

export type Margins = {
  marginAll?: MarginKeyType;
  marginTop?: MarginKeyType;
  marginRight?: MarginKeyType;
  marginBottom?: MarginKeyType;
  marginLeft?: MarginKeyType;
};

export type Paddings = {
  paddingAll?: MarginKeyType;
  paddingTop?: MarginKeyType;
  paddingRight?: MarginKeyType;
  paddingBottom?: MarginKeyType;
  paddingLeft?: MarginKeyType;
};

const color = {
  transparent: 'transparent',
  primary: '#800000',
  success: '#00A86B',
  error: '#EC2300',
  white: '#FFFFFF',
  black: '#000000',
  background: '#dec5c8',
  'light-accent': '#98AFBC',
  'dark-accent': '#4F6C7C',
  lines: '#D8E2E7',
};

const margin = {
  none: 0,
  xxxs: paddingColumn / 4,
  xxs: paddingColumn / 2,
  xss: paddingColumn / 2 + paddingColumn / 4,
  xs: paddingColumn,
  sm: paddingColumn + paddingColumn / 2,
  md: gutterSize,
  lg: gutterSize + paddingColumn / 2,
  xl: gutterSize + paddingColumn,
  xxl: gutterSize * 2,
  xxxl: gutterSize * 2 + paddingColumn,
};

const typography = {
  fontFamily: 'Poppins-',
  fontVariants: {
    Bold: 'Bold',
    BoldItalic: 'BoldItalic',
    SemiBold: 'SemiBold',
    SemiBoldItalic: 'SemiBoldItalic',
    Medium: 'Medium',
    MediumItalic: 'MediumItalic',
    Regular: 'Regular',
    Italic: 'Italic',
    Light: 'Light',
    LightItalic: 'LightItalic',
  },
  fontSize: DeviceUtils.scale(14),
  lineHeight: DeviceUtils.scale(21),
  sizes: {
    xs: {
      fontSize: DeviceUtils.scale(10),
      lineHeight: DeviceUtils.scale(16),
    },
    sm: {
      fontSize: DeviceUtils.scale(12),
      lineHeight: DeviceUtils.scale(18),
    },
    md: {
      fontSize: DeviceUtils.scale(14),
      lineHeight: DeviceUtils.scale(21),
    },
    lg: {
      fontSize: DeviceUtils.scale(16),
      lineHeight: DeviceUtils.scale(24),
    },
    xl: {
      fontSize: DeviceUtils.scale(24),
      lineHeight: DeviceUtils.scale(36),
    },
    xxl: {
      fontSize: DeviceUtils.scale(32),
      lineHeight: DeviceUtils.scale(48),
    },
  },
};

export const theme = {
  typography,
  color,
  margin,
  borderRadius: DeviceUtils.scale(8),
  input: {
    height: DeviceUtils.scale(46),
    multiline: {
      minHeight: DeviceUtils.scale(120),
      maxHeight: DeviceUtils.scale(250),
    },
    padding: {
      top: DeviceUtils.scale(8),
      right: DeviceUtils.scale(8),
      bottom: DeviceUtils.scale(8),
      left: DeviceUtils.scale(8),
    },
    typography: {
      fontSize: DeviceUtils.scale(14),
      lineHeight: DeviceUtils.scale(21),
      fontVariant: 'Regular',
    },
    assistiveText: {
      fontSize: DeviceUtils.scale(12),
      lineHeight: DeviceUtils.scale(16),
    },
    label: {
      fontSize: DeviceUtils.scale(16),
      lineHeight: DeviceUtils.scale(20),
      focus: {
        fontVariant: 'Medium',
        fontSize: DeviceUtils.scale(12),
        lineHeight: DeviceUtils.scale(12),
        padding: {
          top: 0,
          right: DeviceUtils.scale(5),
          bottom: 0,
          left: DeviceUtils.scale(5),
        },
      },
    },
  },
};

export type ThemeType = typeof theme;
export type MarginKeyType = keyof typeof margin;
export type ColorKeyType = keyof typeof color;
export type TypographySizeKeyType = keyof typeof typography.sizes;
export type FontVariants = keyof typeof theme.typography.fontVariants;
