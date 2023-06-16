import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.primary};
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${({theme}) => theme.color.success};
`;
