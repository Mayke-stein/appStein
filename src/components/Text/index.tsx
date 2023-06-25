import React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import {
  ColorKeyType,
  FontVariants,
  Margins,
  Paddings,
  TypographySizeKeyType,
} from '../../theme';

import {TextStyled} from './styles';

export type TextDefaultProps = RNTextProps &
  Margins &
  Paddings & {
    fontVariant?: FontVariants;
    children: React.ReactNode;
    color?: ColorKeyType;
    opacity?: number;
    size?: TypographySizeKeyType;
    textAlign?: 'left' | 'right' | 'center';
    testID?: string;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    textDecoration?:
      | 'underline'
      | 'line-through'
      | 'dashed'
      | 'dotted'
      | 'none';
    flexShrink?: number;
  };

export type TextAttrsProps = Omit<TextDefaultProps, 'children'>;

const Text: React.FC<TextDefaultProps> = ({
  size = 'md',
  color = 'white',
  textAlign = 'left',
  children,
  ...rest
}) => {
  return (
    <TextStyled size={size} textColor={color} textAlign={textAlign} {...rest}>
      {children}
    </TextStyled>
  );
};

const TextTitle: React.FC<TextDefaultProps> = props => (
  <Text {...props} size="lg" fontVariant="SemiBold" />
);

const TextSubtitle: React.FC<TextDefaultProps> = props => (
  <Text {...props} size="md" fontVariant="Regular" color="light-accent" />
);

const TextBody: React.FC<TextDefaultProps> = props => (
  <Text {...props} size="sm" fontVariant="Regular" />
);

const TextCurrency: React.FC<TextDefaultProps> = props => (
  <Text {...props} flexShrink={0} size="xl" fontVariant="Medium" />
);

export {Text, TextTitle, TextCurrency, TextSubtitle, TextBody};
