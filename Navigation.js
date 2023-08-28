import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HeaderMain from "./src/components/navbar/navbar-header";
import Estado from "./src/components/navbar/navbar-estado";
import Particiones from "./src/components/cuentas/particiones";
import Ajustes from "./src/components/Ajustes";
import Notificaciones from "./src/components/Notificaciones";
import Authentication from "./src/components/auth/authentication";
import Cuentas from "./src/components/cuentas/Cuentas";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import CuentaItem from "./src/components/cuentas/CuentaItem";
import Actividad from "./src/components/actividad/actividad";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Particiones" component={Particiones} />
      <Stack.Screen name="CuentaItem" component={CuentaItem} />
      <Stack.Screen name="Home" component={FooterNavigator} />
    </Stack.Navigator>
  );
};

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
          headerTitle: () => (
            <HeaderMain title={"Username"} hasBack={false} hasEdit={true} />
          ),
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
          headerTitle: () => (
            <HeaderMain title={"Username"} hasBack={false} hasEdit={true} />
          ),
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
          headerTitle: () => (
            <HeaderMain title={"Username"} hasBack={false} hasEdit={true} />
          ),
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
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={FooterNavigator} />
        <Stack.Screen name="CuentaItem" component={CuentaItem} />
        <Stack.Screen name="Particiones" component={Particiones} />
        <Stack.Screen name="Auth" component={Authentication} />
        <Stack.Screen name="Actividad" component={Actividad} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
