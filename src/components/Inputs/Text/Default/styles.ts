import {Animated, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {ColorKeyType} from '../../../../theme';

type StyledComponent = {
  focused?: boolean;
  typed?: boolean;
  disabled?: boolean;
  labelTranslate?: number;
  multiline?: boolean;
  currentColor?: ColorKeyType;
  bgLabel?: ColorKeyType;
  color?: ColorKeyType;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};

export const AnimatedLabelBox = styled(Animated.View)<StyledComponent>`
  width: 100%;
  position: absolute;
  transform: translateY(-${({labelTranslate}) => labelTranslate}px);
  margin-left: ${({theme: {input}}) =>
    input.padding.left - input.label.focus.padding.left}px;
  padding-top: ${({theme: {input}}) => input.label.focus.padding.top}px;
  padding-right: ${({theme: {input}}) => input.label.focus.padding.right}px;
  padding-bottom: ${({theme: {input}}) => input.label.focus.padding.bottom}px;
  padding-left: ${({theme: {input}}) => input.label.focus.padding.left}px;
  background: ${({theme, focused, typed, bgLabel = 'transparent'}) => {
    if (focused || typed) {
      return theme.color[bgLabel];
    }

    return theme.color.transparent;
  }};
  z-index: ${({focused, typed}) => (focused || typed ? 5 : 0)};
`;

export const Field = styled(TextInput)<StyledComponent>`
  flex: 1;
  height: 100%;
  font-family: ${({theme}) => theme.typography.fontFamily}${({theme}) => theme.input.typography.fontVariant};
  font-size: ${({theme}) => theme.input.typography.fontSize}px;
  line-height: ${({theme}) => theme.input.typography.lineHeight}px;
  border-radius: ${({theme}) => theme.borderRadius}px;
  color: ${({theme, typed, disabled}) => {
    return typed && disabled ? theme.color['light-accent'] : theme.color.black;
  }};
  overflow: hidden;
  padding-top: ${({theme}) => theme.input.padding.top}px;
  padding-bottom: ${({theme}) => theme.input.padding.bottom}px;
  padding-right: ${({theme, hasRightIcon}) => {
    return hasRightIcon ? 0 : theme.input.padding.right;
  }}px;
  padding-left: ${({theme, hasLeftIcon}) => {
    return hasLeftIcon ? 0 : theme.input.padding.left;
  }}px;
`;

export const AnimatedLabel = styled(Animated.Text)<StyledComponent>`
  font-family: ${({theme}) => theme.typography.fontFamily}${({theme}) => theme.input.typography.fontVariant};
  font-size: ${({theme}) => theme.typography.fontSize}px;
  line-height: ${({theme, focused, typed}) => {
    if (focused || typed) {
      return theme.input.label.focus.lineHeight;
    }

    return theme.input.label.lineHeight;
  }}px;
  height: ${({theme}) => theme.input.label.lineHeight}px;
  color: ${({theme, currentColor = 'light-accent'}) =>
    theme.color[currentColor]};
`;

export const AssistiveText = styled.Text<StyledComponent>`
  margin-top: ${({theme}) => theme.margin.xxxs}px;
  font-family: ${({theme}) => theme.typography.fontFamily}${({theme}) => theme.input.typography.fontVariant};
  font-size: ${({theme}) => theme.input.assistiveText.fontSize}px;
  line-height: ${({theme}) => theme.input.assistiveText.lineHeight}px;
  color: ${({theme, color = 'black'}) => theme.color[color]};
`;
