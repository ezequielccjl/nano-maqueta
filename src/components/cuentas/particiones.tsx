import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "../navbar/navbar";
import ListaParticiones from "./lista-particiones";

const Particiones = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <Navbar
        navigation={navigation}
        title={"Particiones"}
        hasBack={true}
        hasEdit={false}
      />
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
