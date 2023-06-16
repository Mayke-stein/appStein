import React from 'react';
import {ThemeProvider} from 'styled-components';
import {HomeScreen} from './src/modules/HomeScreen';
import {theme} from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
