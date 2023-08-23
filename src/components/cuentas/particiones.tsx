import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import ListaParticiones from "./lista-particiones";
import Navbar from "../navbar/navbar";

const Particiones = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.title}>Particiones</Text>
        <Text style={styles.title}>Oficina</Text>
      </View>
      <ListaParticiones />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF3232",
    justifyContent: "center",
    alignItems: "center",
    height: 230,
    width: "100%",
  },
  title: {
    fontSize: 35,
    fontFamily: "MavenProBold",
    color: "white",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
  },
});

export default Particiones;
