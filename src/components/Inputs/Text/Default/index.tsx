import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {TextInput} from 'react-native';
import {useTheme} from 'styled-components/native';
import {ColorKeyType} from '../../../../theme';
import {RootContainer, RootPressableContainer} from '../../../../theme/styles';
import {Text} from '../../../Text';
import {InputTextProps} from '../types';

import {AssistiveText, Field} from './styles';

export const InputTextDefault = memo(
  forwardRef<TextInput, InputTextProps>(
    (
      {
        activeOpacity = 0.9,
        value = '',
        bgLabel = 'white',
        multiline = false,
        numberOfLines = 1,
        onBlur = () => false,
        onChangeText = () => false,
        onChange = () => false,
        onFocus = () => false,
        iconLeft,
        iconRight,
        label,
        onLeftIconPress,
        onRightIconPress,
        isHiddenPass,
        status = 'lines',
        message,
        testID,
        error,
        parseString,
        disabled = false,
        editable = true,
        placeholderTextColor = 'light-accent',
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        ...rest
      },
      ref,
    ) => {
      const theme = useTheme();

      const parsedValue = useMemo(
        () => (parseString ? parseString(value) : value),
        [parseString, value],
      );

      const [focused, setFocused] = useState(Boolean(parsedValue));
      const [typed, setTyped] = useState(Boolean(parsedValue));

      const currentColor: ColorKeyType = status ?? focused ? 'lines' : 'white';
      const messageColor: ColorKeyType = error ? 'error' : status ?? 'lines';

      const _onChangeText = useCallback(
        (text: string) => {
          const _text = parseString ? parseString(text) : text;
          setTyped(Boolean(_text));
          onChangeText(_text ?? '');
        },
        [onChangeText, parseString],
      );

      useEffect(() => {
        setTyped(Boolean(parsedValue));
      }, [parsedValue]);

      return (
        <RootContainer
          marginTop={marginTop}
          marginRight={marginRight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}>
          {label ? (
            <RootContainer marginBottom="xxxs">
              <Text>{label}</Text>
            </RootContainer>
          ) : null}
          <RootContainer
            flexDirection="row"
            minHeight={multiline ? theme?.input.multiline.minHeight : undefined}
            maxHeight={multiline ? theme?.input.multiline.maxHeight : undefined}
            height={multiline ? undefined : theme?.input.height}
            borderRadius={theme?.borderRadius}
            borderWidth={1}
            borderColor={typed && disabled ? 'lines' : currentColor}>
            {iconLeft ? (
              <RootPressableContainer
                activeOpacity={activeOpacity}
                onPress={onLeftIconPress}
                disabled={!onLeftIconPress}
                alignItems="center"
                justifyContent="center"
                paddingLeft="xxs"
                paddingRight="xxs">
                {iconLeft}
              </RootPressableContainer>
            ) : null}
            <Field
              {...rest}
              ref={ref}
              multiline={multiline}
              numberOfLines={numberOfLines}
              editable={editable && !disabled}
              typed={typed}
              disabled={disabled}
              secureTextEntry={isHiddenPass}
              hasLeftIcon={Boolean(iconLeft)}
              hasRightIcon={Boolean(iconRight)}
              placeholderTextColor={theme?.color[placeholderTextColor]}
              testID={testID}
              value={parsedValue}
              onChange={onChange}
              onChangeText={_onChangeText}
              onFocus={e => {
                setFocused(true);
                onFocus(e);
              }}
              onBlur={e => {
                setFocused(false);
                onBlur(e);
              }}
            />
            {iconRight ? (
              <RootPressableContainer
                activeOpacity={activeOpacity}
                onPress={onRightIconPress}
                disabled={!onRightIconPress}
                height="100%"
                alignItems="center"
                justifyContent="center"
                paddingLeft="xxs"
                paddingRight="xxs">
                {iconRight}
              </RootPressableContainer>
            ) : null}
          </RootContainer>
          {message || error ? (
            <RootContainer marginBottom="xxxs">
              <AssistiveText color={messageColor}>
                {error ? error : message}
              </AssistiveText>
            </RootContainer>
          ) : null}
        </RootContainer>
      );
    },
  ),
);
