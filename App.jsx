import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import ApplicationScreen from './screens/ApplicationScreen';
import RequireAuth from './components/RequireAuth';
import ReleasesScreen from './screens/ReleasesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen}  options={{ headerShown: false }}  />
        <Stack.Screen name="Application" options={{ headerShown: true}}>
          {() => (
            <RequireAuth>
              <ApplicationScreen />
            </RequireAuth>
          )}
        </Stack.Screen>
        <Stack.Screen name="Release" options={{ headerShown: true}}>
          {() => (
            <RequireAuth>
              <ReleasesScreen />
            </RequireAuth>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
