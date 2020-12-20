import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screen/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <Auth.Screen name="Home" component={Home} />
  </Auth.Navigator>
);

export default AuthRoutes;