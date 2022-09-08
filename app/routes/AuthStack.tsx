import React, { FC } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { AuthStackParamsList, MainStackParamsList } from '@configs/Types';
import SignInScreen from '@screens/authentication/SignInScreen/SignInScreen';
import SignUpScreen from '@screens/authentication/SignUpScreen/SignUpScreen';
import WelcomeScreen from '@screens/authentication/WelcomeScreen/WelcomeScreen';

const Stack = createStackNavigator<AuthStackParamsList>();
const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
