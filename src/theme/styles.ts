import {ScrollView, ScrollViewProps, ViewStyle} from 'react-native';
import {styled} from 'styled-components/native';
import {ColorKeyType, Margins, Paddings} from '.';

type BaseProps = {
  zIndex?: number;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  bgColor?: ColorKeyType;
  borderColor?: ColorKeyType;
  insetsTop?: number;
  insetsBottom?: number;
  opacity?: number;
};

type FlexProps = Pick<
  ViewStyle,
  'flex' | 'flexGrow' | 'flexShrink' | 'flexWrap' | 'flexDirection'
>;

type AlignProps = Pick<
  ViewStyle,
  'alignContent' | 'alignItems' | 'alignSelf' | 'justifyContent'
>;

type BorderProps = Pick<
  ViewStyle,
  | 'borderRadius'
  | 'borderStyle'
  | 'borderWidth'
  | 'borderBottomWidth'
  | 'borderTopWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth'
>;

export type RootContainerProps = FlexProps &
  AlignProps &
  BorderProps &
  Margins &
  Paddings &
  BaseProps;

export type RootScrollContainerProps = Pick<FlexProps, 'flex'> &
  BorderProps &
  Margins &
  Paddings &
  BaseProps;

const getDimensionsByType = (dim: number | string): string => {
  if (typeof dim === 'number') return `${dim}px`;

  return dim;
};

export const RootContainer = styled.View<RootContainerProps>`
  ${({zIndex}) => zIndex !== undefined && `z-index: ${zIndex};`};
  ${({width}) =>
    width !== undefined && `width: ${getDimensionsByType(width)};`};
  ${({height}) =>
    height !== undefined && `height: ${getDimensionsByType(height)};`};
  ${({minWidth}) =>
    minWidth !== undefined && `min-width: ${getDimensionsByType(minWidth)};`};
  ${({minHeight}) =>
    minHeight !== undefined &&
    `min-height: ${getDimensionsByType(minHeight)};`};
  ${({maxWidth}) =>
    maxWidth !== undefined && `max-width: ${getDimensionsByType(maxWidth)};`};
  ${({maxHeight}) =>
    maxHeight !== undefined &&
    `max-height: ${getDimensionsByType(maxHeight)};`};
  ${({flex}) => flex !== undefined && `flex: ${flex};`};
  ${({flexGrow}) => flexGrow !== undefined && `flex-grow: ${flexGrow};`};
  ${({flexShrink}) =>
    flexShrink !== undefined && `flex-shrink: ${flexShrink};`};
  ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap};`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`};
  ${({justifyContent}) =>
    justifyContent !== undefined && `justify-content: ${justifyContent};`};
  ${({alignSelf}) => alignSelf !== undefined && `align-self: ${alignSelf};`};
  ${({alignContent}) =>
    alignContent !== undefined && `align-content: ${alignContent};`};
  ${({opacity}) => opacity !== undefined && `opacity: ${opacity};`};
  border-width: ${({borderWidth = 0}) => borderWidth}px;
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  border-color: ${({theme, borderColor = 'transparent'}) =>
    theme.color[borderColor]};
  background-color: ${({theme, bgColor = 'transparent'}) =>
    theme.color[bgColor]};
  margin: ${({theme, marginAll = 'none'}) => theme.margin[marginAll]}px;
  ${({theme, marginTop}) =>
    marginTop !== undefined && `margin-top: ${theme.margin[marginTop]}px;`};
  ${({theme, marginBottom}) =>
    marginBottom !== undefined &&
    `margin-bottom: ${theme.margin[marginBottom]}px;`};
  ${({theme, marginLeft}) =>
    marginLeft !== undefined && `margin-left: ${theme.margin[marginLeft]}px;`};
  ${({theme, marginRight}) =>
    marginRight !== undefined &&
    `margin-right: ${theme.margin[marginRight]}px;`};
  padding: ${({theme, paddingAll = 'none'}) => theme.margin[paddingAll]}px;
  ${({theme, paddingTop}) =>
    paddingTop !== undefined && `padding-top: ${theme.margin[paddingTop]}px;`};
  ${({theme, paddingBottom}) =>
    paddingBottom !== undefined &&
    `padding-bottom: ${theme.margin[paddingBottom]}px;`};
  ${({theme, paddingLeft}) =>
    paddingLeft !== undefined &&
    `padding-left: ${theme.margin[paddingLeft]}px;`};
  ${({theme, paddingRight}) =>
    paddingRight !== undefined &&
    `padding-right: ${theme.margin[paddingRight]}px;`};
  ${({theme, insetsTop, paddingTop = 'xs'}) => {
    if (insetsTop === undefined) return;

    if (insetsTop) {
      return `padding-top: ${insetsTop}px;`;
    }

    return `padding-top: ${theme.margin[paddingTop]}px;`;
  }};
  ${({theme, insetsBottom, paddingBottom = 'xs'}) => {
    if (insetsBottom === undefined) return;

    if (insetsBottom) {
      return `padding-bottom: ${insetsBottom}px;`;
    }

    return `padding-bottom: ${theme.margin[paddingBottom]}px;`;
  }};
`;

export const RootScrollContainer = styled(
  ScrollView,
).attrs<RootScrollContainerProps>(
  ({contentContainerStyle, ...rest}): ScrollViewProps => {
    return {
      showsVerticalScrollIndicator: false,
      showsHorizontalScrollIndicator: false,
      keyboardShouldPersistTaps: 'handled',
      contentContainerStyle: {
        flexGrow: 1,
        ...(contentContainerStyle as Record<string, unknown>),
      },
      ...rest,
    };
  },
)<RootScrollContainerProps>`
  ${({zIndex}) => zIndex !== undefined && `z-index: ${zIndex};`};
  ${({width}) =>
    width !== undefined && `width: ${getDimensionsByType(width)};`};
  ${({height}) =>
    height !== undefined && `height: ${getDimensionsByType(height)};`};
  ${({minWidth}) =>
    minWidth !== undefined && `min-width: ${getDimensionsByType(minWidth)};`};
  ${({minHeight}) =>
    minHeight !== undefined &&
    `min-height: ${getDimensionsByType(minHeight)};`};
  ${({maxWidth}) =>
    maxWidth !== undefined && `max-width: ${getDimensionsByType(maxWidth)};`};
  ${({maxHeight}) =>
    maxHeight !== undefined &&
    `max-height: ${getDimensionsByType(maxHeight)};`};
  ${({flex}) => flex !== undefined && `flex: ${flex};`};
  border-width: ${({borderWidth = 0}) => borderWidth}px;
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  border-color: ${({theme, borderColor = 'transparent'}) =>
    theme.color[borderColor]};
  background-color: ${({theme, bgColor = 'transparent'}) =>
    theme.color[bgColor]};
  margin: ${({theme, marginAll = 'none'}) => theme.margin[marginAll]}px;
  ${({theme, marginTop}) =>
    marginTop !== undefined && `margin-top: ${theme.margin[marginTop]}px;`};
  ${({theme, marginBottom}) =>
    marginBottom !== undefined &&
    `margin-bottom: ${theme.margin[marginBottom]}px;`};
  ${({theme, marginLeft}) =>
    marginLeft !== undefined && `margin-left: ${theme.margin[marginLeft]}px;`};
  ${({theme, marginRight}) =>
    marginRight !== undefined &&
    `margin-right: ${theme.margin[marginRight]}px;`};
  padding: ${({theme, paddingAll = 'none'}) => theme.margin[paddingAll]}px;
  ${({theme, paddingTop}) =>
    paddingTop !== undefined && `padding-top: ${theme.margin[paddingTop]}px;`};
  ${({theme, paddingBottom}) =>
    paddingBottom !== undefined &&
    `padding-bottom: ${theme.margin[paddingBottom]}px;`};
  ${({theme, paddingLeft}) =>
    paddingLeft !== undefined &&
    `padding-left: ${theme.margin[paddingLeft]}px;`};
  ${({theme, paddingRight}) =>
    paddingRight !== undefined &&
    `padding-right: ${theme.margin[paddingRight]}px;`};
  ${({theme, insetsTop, paddingTop = 'xs'}) => {
    if (insetsTop === undefined) return;

    if (insetsTop) {
      return `padding-top: ${insetsTop}px;`;
    }

    return `padding-top: ${theme.margin[paddingTop]}px;`;
  }};
  ${({theme, insetsBottom, paddingBottom = 'xs'}) => {
    if (insetsBottom === undefined) return;

    if (insetsBottom) {
      return `padding-bottom: ${insetsBottom}px;`;
    }

    return `padding-bottom: ${theme.margin[paddingBottom]}px;`;
  }};
`;

export const RootPressableContainer = styled.TouchableOpacity<RootContainerProps>`
  ${({zIndex}) => zIndex !== undefined && `z-index: ${zIndex};`};
  ${({width}) =>
    width !== undefined && `width: ${getDimensionsByType(width)};`};
  ${({height}) =>
    height !== undefined && `height: ${getDimensionsByType(height)};`};
  ${({minWidth}) =>
    minWidth !== undefined && `min-width: ${getDimensionsByType(minWidth)};`};
  ${({minHeight}) =>
    minHeight !== undefined &&
    `min-height: ${getDimensionsByType(minHeight)};`};
  ${({maxWidth}) =>
    maxWidth !== undefined && `max-width: ${getDimensionsByType(maxWidth)};`};
  ${({maxHeight}) =>
    maxHeight !== undefined &&
    `max-height: ${getDimensionsByType(maxHeight)};`};
  ${({flex}) => flex !== undefined && `flex: ${flex};`};
  ${({flexGrow}) => flexGrow !== undefined && `flex-grow: ${flexGrow};`};
  ${({flexShrink}) =>
    flexShrink !== undefined && `flex-shrink: ${flexShrink};`};
  ${({flexWrap}) => flexWrap !== undefined && `flex-wrap: ${flexWrap};`};
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`};
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent};`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf};`};
  ${({alignContent}) => alignContent && `align-content: ${alignContent};`};
  border-width: ${({borderWidth = 0}) => borderWidth}px;
  border-radius: ${({borderRadius = 0}) => borderRadius}px;
  border-color: ${({theme, borderColor = 'transparent'}) =>
    theme.color[borderColor]};
  border-style: ${({borderStyle = 'solid'}) => borderStyle};
  background-color: ${({theme, bgColor = 'transparent'}) =>
    theme.color[bgColor]};
  margin: ${({theme, marginAll = 'none'}) => theme.margin[marginAll]}px;
  ${({theme, marginTop}) =>
    marginTop !== undefined && `margin-top: ${theme.margin[marginTop]}px;`};
  ${({theme, marginBottom}) =>
    marginBottom !== undefined &&
    `margin-bottom: ${theme.margin[marginBottom]}px;`};
  ${({theme, marginLeft}) =>
    marginLeft !== undefined && `margin-left: ${theme.margin[marginLeft]}px;`};
  ${({theme, marginRight}) =>
    marginRight !== undefined &&
    `margin-right: ${theme.margin[marginRight]}px;`};
  padding: ${({theme, paddingAll = 'none'}) => theme.margin[paddingAll]}px;
  ${({theme, paddingTop}) =>
    paddingTop !== undefined && `padding-top: ${theme.margin[paddingTop]}px;`};
  ${({theme, paddingBottom}) =>
    paddingBottom !== undefined &&
    `padding-bottom: ${theme.margin[paddingBottom]}px;`};
  ${({theme, paddingLeft}) =>
    paddingLeft !== undefined &&
    `padding-left: ${theme.margin[paddingLeft]}px;`};
  ${({theme, paddingRight}) =>
    paddingRight !== undefined &&
    `padding-right: ${theme.margin[paddingRight]}px;`};
  ${({theme, insetsTop, paddingTop = 'xs'}) => {
    if (insetsTop === undefined) return;

    if (insetsTop !== 0) {
      return `padding-top: ${insetsTop}px;`;
    }

    return `padding-top: ${theme.margin[paddingTop]}px;`;
  }};
  ${({theme, insetsBottom, paddingBottom = 'xs'}) => {
    if (insetsBottom === undefined) return;

    if (insetsBottom) {
      return `padding-bottom: ${insetsBottom}px;`;
    }

    return `padding-bottom: ${theme.margin[paddingBottom]}px;`;
  }};
`;
