// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './StartPage';
import GamePage from './GamePage';
import EndPage from './EndPage'; // Update the import statement to match the new file name

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Game" component={GamePage} />
        <Stack.Screen name="End" component={EndPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
