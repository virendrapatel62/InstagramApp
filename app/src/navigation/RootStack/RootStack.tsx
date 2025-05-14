// src/navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { rootStackConfig } from '../config/RootStack.config';
import { useTheme } from '../../theme';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      {rootStackConfig.map(screen => (
        <Stack.Screen
          name={screen.name}
          key={screen.name}
          component={screen.component}
          options={{
            headerShown: screen?.options?.headerShown,
            animation: screen?.options?.animation || 'default',
            title: screen.title || screen.name,
            headerTintColor: theme.colors.textPrimary,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
