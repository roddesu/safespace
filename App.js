import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import Homepage from './src/screens/Homepage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting user from AsyncStorage', error);
    return null;
  }
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in when the app starts
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // If user is logged in, navigate to Homepage
          <Stack.Screen name="Homepage" component={Homepage} />
        ) : (
          // If no user, show the Login screen
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
        
        {/* Register Screen */}
        <Stack.Screen name="Register" component={RegisterScreen} />
        
        {/* Reset Password Screen */}
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
