import React, {forwardRef, memo, useState} from 'react';
import {TextInput} from 'react-native';

import {InputTextDefault} from '../Default';
import {InputTextProps} from '../types';

export type InputTextPasswordProps = Omit<InputTextProps, 'label'> & {
  label?: string;
};

export const InputTextPassword = memo(
  forwardRef<TextInput, InputTextPasswordProps>((props, ref) => {
    const [isHiddenPass, setIsHiddenPass] = useState(true);

    const onRightIconPress = () => setIsHiddenPass(prev => !prev);

    return (
      <InputTextDefault
        {...props}
        ref={ref}
        isHiddenPass={isHiddenPass}
        onRightIconPress={onRightIconPress}
      />
    );
  }),
);
