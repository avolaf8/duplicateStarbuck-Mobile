import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./BottomNavigator";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNavigator}
          options={{title: "Our Menu", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
