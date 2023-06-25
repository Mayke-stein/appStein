import React from 'react';
import {RootContainer} from '../../theme/styles';
import {LoginContainer} from './components/LoginContainer';

export const HomeScreen: React.FC = () => {
  return (
    <RootContainer
      flex={1}
      bgColor="background"
      justifyContent="center"
      paddingAll="xs">
      <LoginContainer />
    </RootContainer>
  );
};
