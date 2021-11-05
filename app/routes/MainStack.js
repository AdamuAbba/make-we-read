import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { Platform, StatusBar } from "react-native";
import { colors } from "../configs/gloabalStyles";
import WebPageScreen from "../screens/WebPageScreen";
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebPage"
          component={WebPageScreen}
          options={{
            headerShown: true,
            headerTintColor: "#ffff",
            headerTitle: "book info",

            headerStyle: { backgroundColor: colors.dark },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
