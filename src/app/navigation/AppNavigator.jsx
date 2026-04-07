import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import EditProfileScreen from '../../screens/profile/EditProfileScreen';
import LoginScreen from '../../auth/screens/LoginScreen';
import OtpScreen from '../../auth/screens/OtpScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component = {LoginScreen} />
        <Stack.Screen name = "Otp" component = {OtpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component = {EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}