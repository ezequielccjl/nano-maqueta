import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import ListaCuentas from "./lista-cuentas";
import { useHeaderHeight } from "@react-navigation/elements";

const Cuentas = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            { top: 230 / 2 - headerHeight / 1.5 },
          ]}
        >
          Cuentas
        </Text>
      </View>
      <ListaCuentas navigation={navigation} />
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
    position: "absolute",
    fontSize: 35,
    fontFamily: "MavenProBold",
    color: "white",
  },
  container: {
    flex: 1,
  },
});

export default Cuentas;
