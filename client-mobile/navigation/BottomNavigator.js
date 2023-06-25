import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../assets/json/colors";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        height: 100,
        borderTopWidth: 0,
        elevation: 0,
      },
      activeTintColor: COLORS.green,


    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home-sharp" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="card" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="fast-food-sharp" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map-sharp" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
