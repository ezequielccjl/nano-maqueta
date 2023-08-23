import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import Switch from "./util/switch";
import CustomModal from "./modal/modal";

const Login = ({ navigation }) => {
  const [titleModal, setTitleModal] = useState(undefined);
  const [subtitleModal, setSubtitleModal] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loaded] = useFonts({
    MavenProBold: require("../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const loginHandler = () => {
    navigation.navigate("Home");
  };

  const toggleModalPass = () => {
    setIsModalOpen(true), setTitleModal("Recuperar Contraseña");
    setSubtitleModal("Ingrese su mail para recuperar contraseña");
  };

  const toggleModalConexion = () => {
    setIsModalOpen(true), setTitleModal("Ingrese URL Conexión");
    setSubtitleModal(undefined);
  };

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
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnIngresar}
          onPress={loginHandler}
        >
          <Text style={styles.textBtnIngresar}>INGRESAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModalPass}>
          <Text style={styles.olvidaste}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModalConexion}>
          <Text style={styles.cambiarConexion}>Cambiar conexión Back-End</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        title={titleModal}
        subtitle={subtitleModal}
        setSubtitle={setSubtitleModal}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
    paddingBottom: 100,
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
    fontSize: 20,
    fontFamily: "MavenProMedium",
    textAlign: "center",
    color: "white",
  },
  olvidaste: {
    fontFamily: "MavenProSemiBold",
    fontSize: 15,
    marginTop: 28,
    color: "#6F6F6F",
    textAlign: "center",
  },
  cambiarConexion: {
    fontFamily: "MavenProMedium",
    fontSize: 15,
    marginTop: 28,
    color: "#6F6F6F",
    textAlign: "center",
  },
});

export default Login;
