import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Main from '../screens/Main';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MainScreen" component={Main} />
    </Stack.Navigator>
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
