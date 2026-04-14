import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../../features/screens/profile/EditProfileScreen';
import LoginScreen from '../../features/auth/screens/LoginScreen';
import OtpScreen from '../../features/auth/screens/OtpScreen';
import FeedScreen from '../../features/auth/screens/FeedScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component = {LoginScreen} />
        <Stack.Screen name = "Otp" component = {OtpScreen} />
        <Stack.Screen name="Feed" component = {FeedScreen} />
        <Stack.Screen name="EditProfile" component = {EditProfileScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}