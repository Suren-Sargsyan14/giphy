import React from 'react';
import { Platform, UIManager } from 'react-native';

import Navigation from './src/Navigation';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return <Navigation />;
};

export default App;
