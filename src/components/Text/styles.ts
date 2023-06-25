import styled from 'styled-components/native';
import {
  ColorKeyType,
  FontVariants,
  Margins,
  Paddings,
  TypographySizeKeyType,
} from '../../theme';

type TextDefaultProps = {
  size: TypographySizeKeyType;
  textColor: ColorKeyType;
  textAlign: 'left' | 'right' | 'center';
  opacity?: number;
  fontVariant?: FontVariants;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  textDecoration?: 'underline' | 'line-through' | 'dashed' | 'dotted' | 'none';
  flexShrink?: number;
};

export const TextStyled = styled.Text<TextDefaultProps & Margins & Paddings>`
  ${({flexShrink}) => flexShrink !== undefined && `flex-shrink: ${flexShrink};`}
  font-family: ${({
    theme: {
      typography: {fontFamily},
    },
    fontVariant = 'Regular',
  }) => `${fontFamily}${fontVariant}`};
  font-size: ${({
    theme: {
      typography: {sizes},
    },
    size = 'xs',
  }) => sizes[size].fontSize}px;
  line-height: ${({
    theme: {
      typography: {sizes},
    },
    size = 'xs',
  }) => sizes[size].lineHeight}px;
  color: ${({theme, textColor = 'black'}) => theme.color[textColor]};
  ${({opacity}) => opacity !== undefined && `opacity: ${opacity};`}
  text-align: ${({textAlign}) => textAlign};
  text-transform: ${({textTransform}) => textTransform ?? 'none'};
  text-decoration: ${({textDecoration}) => textDecoration ?? 'none'};
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
`;
