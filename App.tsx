import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <MainStack />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
