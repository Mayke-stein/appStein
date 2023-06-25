import {styled} from 'styled-components/native';

export const BackgroundImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${({theme}) => theme.color.success};
`;
