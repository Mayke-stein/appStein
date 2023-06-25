import React, {forwardRef, memo} from 'react';
import {TextInput} from 'react-native';

import {InputTextDefault} from '../Default';
import {InputTextProps} from '../types';

export const InputTextEmail = memo(
  forwardRef<TextInput, InputTextProps>((props, ref) => (
    <InputTextDefault
      {...props}
      ref={ref}
      autoCapitalize="none"
      label={props.label}
      keyboardType="email-address"
    />
  )),
);
