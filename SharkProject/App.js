import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './StartPage';
import GamePage from './GamePage'; // Make sure this is the correct path to your GamePage.js

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Game" component={GamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
