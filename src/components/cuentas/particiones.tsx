import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import ListaParticiones from "./lista-particiones";

const Particiones = () => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            ...styles.title,
            position: "absolute",
            top: 230 / 2 - headerHeight / 1.5,
          }}
        >
          Particiones
        </Text>
      </View>
      <ListaParticiones />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
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
