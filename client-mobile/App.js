import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from './screens/DetailScreen';
import OnBoardScreen from "./screens/OnBoardScreen";
import BottomNavigator from "./navigation/BottomNavigator";
import COLORS from "./assets/json/colors";
import client from "./configs/apollo"
import { ApolloProvider } from "@apollo/client";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
