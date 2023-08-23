import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HeaderMain from "./src/components/cuentas/HeaderCuentas";
import Estado from "./src/components/estado/Estado";
import Particiones from "./src/components/cuentas/particiones";
import Ajustes from "./src/components/Ajustes";
import Notificaciones from "./src/components/Notificaciones";
import Authentication from "./src/components/auth/authentication";

const Tab = createBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Cuentas"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF3232",
        tabBarInactiveTintColor: "#6F6F6F",
        tabBarStyle: { position: "absolute", borderRadius: 15, height: 70 },
      }}
    >
      <Tab.Screen
        name="Cuentas"
        component={Authentication}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list-alt" size={24} color={color} />
          ),
          headerTitle: () => <HeaderMain />,
          headerRight: () => <Estado />,
          headerStyle: {
            backgroundColor: "#FF3232",
            shadowColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={Notificaciones}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
          headerTitle: () => <HeaderMain />,
          headerRight: () => <Estado />,
          headerStyle: {
            backgroundColor: "#FF3232",
            shadowColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={Particiones}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings-sharp" size={24} color={color} />
          ),
          headerTitle: () => <HeaderMain />,
          headerRight: () => <Estado />,
          headerStyle: {
            backgroundColor: "#FF3232",
            shadowColor: "transparent",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <FooterNavigator />
    </NavigationContainer>
  );
}
