import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { useFonts } from "expo-font";
import data, { IData } from "../../data/data";
import CuentaTile from "./cuenta-tile";

const CuentaItem = () => {
  const headerHeight = useHeaderHeight();

  const [cuenta, setCuenta] = useState<any>({});

  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  useEffect(() => {
    const unaCuenta = data[0];
    setCuenta(unaCuenta);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.listRedirect}>Lista Particiones</Text>
        </View>
        <CuentaTile cuenta={cuenta} hasButton={false} />
      </View>
      <View style={{ marginTop: 230 }}>
        <Pressable style={styles.btnDesarmar}>
          <Text style={styles.mavenGray20}>Desarmar</Text>
        </Pressable>
      </View>
      <View style={styles.zonasContainer}>
        <Text style={styles.titleZonas}>Zonas</Text>
        <View>
          <Text style={styles.mavenGray20}>Recordar clave</Text>
        </View>
      </View>
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
    fontSize: 30,
    fontFamily: "MavenProBold",
    color: "white",
  },
  container: {
    flex: 1,
  },
  listRedirect: {
    color: "white",
    fontFamily: "MavenProMedium",
    marginBottom: 13,
    fontSize: 18,
  },
  btnDesarmar: {
    backgroundColor: "#FFFFFF",
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#6F6F6F",
    marginLeft: 20,
  },
  mavenGray20: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
    color: "#6F6F6F",
  },
  titleZonas: {
    fontFamily: "MavenProMedium",
    fontSize: 25,
  },
  zonasContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CuentaItem;
