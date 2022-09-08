import React, { FC } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { MainStackParamsList } from '@configs/Types';
import HomeScreen from '@screens/HomeScreen';
import WebPageScreen from '@screens/WebPageScreen';
import { colors } from '@configs/globalStyles';

const Stack = createStackNavigator<MainStackParamsList>();
const MainStack: FC = () => {
  return (
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
        initialParams={{
          bookPreviewLink: '',
        }}
        options={{
          headerShown: true,
          headerTintColor: '#ffff',
          headerTitle: 'book info',

          headerStyle: { backgroundColor: colors.dark },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
