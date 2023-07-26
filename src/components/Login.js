import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Login = () => {
  const [loaded] = useFonts({
    MavenProBold: require("../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/imgs/logo.png")}
        ></Image>
        <Text style={styles.title}>Nanocomm</Text>
        <Text style={styles.subtitle}>EVOLUCIÓN QUE SE TRANSMITE</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnIngresar}>
          <Text style={styles.textBtnIngresar}>INGRESAR</Text>
        </TouchableOpacity>
        <Text style={styles.olvidaste}>¿Olvidaste tu contraseña?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 323,
    backgroundColor: "#FF3232",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontFamily: "MavenProBold",
    fontSize: 35,
    color: "white",
  },
  subtitle: {
    fontFamily: "MavenProRegular",
    fontSize: 15,
    color: "white",
    marginTop: 12,
  },
  logo: {
    width: 80,
    height: 80,
  },
  buttons: {
    marginTop: 20,
    alignItems: "center",
  },
  btnIngresar: {
    width: 250,
    backgroundColor: "#FF3232",
    paddingBottom: 13,
    paddingTop: 13,
    borderRadius: 10,
    fontFamily: "MavenProMedium",
    fontSize: 15,
  },
  textBtnIngresar: {
    fontFamily: "MavenProMedium",
    textAlign: "center",
    color: "white",
  },
  olvidaste: {
    marginTop: 28,
    fontFamily: "MavenProMedium",
    color: "#6F6F6F",
    textAlign: "center",
  },
});

export default Login;
