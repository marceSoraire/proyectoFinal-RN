import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colorsTheme } from "../../constants";
import InitNavigator from "../InitNav";
import CartNavigator from "../cartNav";
import PartnersNavigator from "../partnersNav";
import SportNavigator from "../sportsNav";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="InitTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "medium",
          fontSize: 12,
        },
        tabBarActiveTintColor: colorsTheme.black,
        tabBarInactiveTintColor: colorsTheme.tabs,
        tabBarIconStyle: {
          fontSize: 20,
        },
      }}
    >
      <BottomTab.Screen
        name="InitTab"
        component={InitNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="PartnersTab"
        component={PartnersNavigator}
        options={{
          tabBarLabel: "Partners",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "people-sharp" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SportTab"
        component={SportNavigator}
        options={{
          tabBarLabel: "Sport",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "lock-closed" : "lock-closed-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
