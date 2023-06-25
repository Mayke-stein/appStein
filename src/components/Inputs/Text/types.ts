import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import {ColorKeyType, Margins} from '../../../theme';

export type InputTextProps = TextInputProps &
  Margins & {
    activeOpacity?: number;
    bgLabel?: ColorKeyType;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    parseString?: (text: string | undefined) => string | undefined;
    label?: string;
    message?: string;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onChangeText?: (text: string) => void;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onLeftIconPress?: () => void;
    onRightIconPress?: () => void;
    error?: string;
    isHiddenPass?: boolean;
    status?: ColorKeyType;
    testID?: string;
    value?: string;
    withAnimatedLabel?: boolean;
    multiline?: boolean;
    disabled?: boolean;
    placeholderTextColor?: ColorKeyType;
    currentColor?: ColorKeyType;
    numberOfLines?: number;
    typed?: boolean;
  };
