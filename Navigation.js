import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Cuentas from "./src/components/cuentas/Cuentas";
import Notificaciones from "./src/components/Notificaciones";
import Ajustes from "./src/components/Ajustes";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HeaderMain from "./src/components/cuentas/HeaderCuentas";
import Estado from "./src/components/estado/Estado";
import Ejemplo from "./src/components/Ejemplo";

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
        component={Cuentas}
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
            <MaterialCommunityIcons name="bell" size={24} color={color} />
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
        component={Ajustes}
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
