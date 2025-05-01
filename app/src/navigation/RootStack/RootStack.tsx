// src/navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { rootStackConfig } from '../config/RootStack.config';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      {rootStackConfig.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: screen?.options?.headerShown,
            animation: screen?.options?.animation || 'default',
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
