import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HeaderMain from "./src/components/cuentas/HeaderCuentas";
import Estado from "./src/components/estado/Estado";
import CuentaItem from "./src/components/cuentas/CuentaItem";
import Particiones from "./src/components/cuentas/particiones";
import Actividad from "./src/components/actividad/actividad";
import Ajustes from "./src/components/Ajustes";
import Cuentas from "./src/components/cuentas/Cuentas";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import Notificaciones from "./src/components/Notificaciones";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='CuentaItem' component={CuentaItem} />
      <Stack.Screen name='Particiones' component={Particiones} />
      <Stack.Screen name='Home' component={FooterNavigator} />
    </Stack.Navigator>
  )
}

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
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={FooterNavigator} />
        <Stack.Screen name="CuentaItem" component={CuentaItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
