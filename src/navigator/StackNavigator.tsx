import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/WelcomeScreen/WelcomeScreen';
import { ListScreen } from '../screens/ListScreen/ListScreen';
import { ResultsScreen } from '../screens/ResultsScreen/ResultsScreen';
import { CardScreen } from '../screens/CardScreen/CardScreen';

export type RootStackParams = {
  WelcomeScreen: undefined,
  ListScreen: undefined,
  ResultsScreen: {Valor: string, Fecha: string},
  CardScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: '#fff'
        },
        
      }}
    >
      <Stack.Screen name="WelcomeScreen" options={{title: 'Home', headerShown: false}} component={WelcomeScreen} />
      <Stack.Screen name="ListScreen" options={{title: 'List Screen', headerShown: true}} component={ListScreen} />
      <Stack.Screen name="ResultsScreen" options={{title: 'Results', headerShown: true}} component={ResultsScreen} />
      <Stack.Screen name="CardScreen" options={{title: 'Results', headerShown: true}} component={CardScreen} />
      
    </Stack.Navigator>
  );
}