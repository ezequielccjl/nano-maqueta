import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import Switch from "../util/switch";
import CustomModal from "../modal/modal";

const Ajustes = ({ navigation }) => {
  const [placeholderModal, setPlaceholderModal] = useState(undefined);
  const [titleModal, setTitleModal] = useState(undefined);
  const [subtitleModal, setSubtitleModal] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationOn, setNotificationOn] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const headerHeight = useHeaderHeight();
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const toggleSwitch = (state, setState) => {
    setState(!state);
  };

  const toggleModalCodigo = () => {
    setIsModalOpen(true), setTitleModal("Ingrese Código Proveedor");
    setSubtitleModal(undefined);
    setPlaceholderModal("Código proveedor");
  };

  const toggleModalConexion = () => {
    setIsModalOpen(true), setTitleModal("Ingrese URL Conexión");
    setSubtitleModal(undefined);
    setPlaceholderModal("URL Conexión");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={[styles.title, { top: 230 / 2 - headerHeight / 1.5 }]}>
          Ajustes
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.botonera}>
          <View style={styles.rowLabelSwitch}>
            <Text style={styles.textLabel}>Notificaciones</Text>
            <Switch
              toggleSwitch={() =>
                toggleSwitch(notificationOn, setNotificationOn)
              }
              isOn={notificationOn}
            />
          </View>
          <View style={[styles.rowLabelSwitch, { marginTop: 20 }]}>
            <Text style={styles.textLabel}>Sonidos</Text>
            <Switch
              toggleSwitch={() => toggleSwitch(soundOn, setSoundOn)}
              isOn={soundOn}
            />
          </View>
        </View>
        <View style={styles.botoneraContainer}>
          <TouchableOpacity
            style={styles.btnCerrarSesion}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnText}>Cerrar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.marginTop30}
            onPress={toggleModalCodigo}
          >
            <Text style={styles.btnTextGray}>Cambiar código proveedor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.marginTop30}
            onPress={toggleModalConexion}
          >
            <Text style={styles.btnTextGray}>Cambiar conexión Back-End</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomModal
        title={titleModal}
        subtitle={subtitleModal}
        setSubtitle={setSubtitleModal}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        placeholder={placeholderModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#FF3232",
    justifyContent: "center",
    alignItems: "center",
    height: 230,
  },
  title: {
    position: "absolute",
    fontSize: 30,
    fontFamily: "MavenProBold",
    color: "white",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 150,
  },
  botonera: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 40,
    paddingHorizontal: 33,
    borderRadius: 10,
  },
  btnCerrarSesion: {
    width: 220,
    backgroundColor: "#DB3641",
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 50,
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "MavenProMedium",
    fontSize: 20,
  },
  btnTextGray: {
    color: "#6F6F6F",
    fontFamily: "MavenProSemiBold",
    fontSize: 15,
  },
  textLabel: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
  },
  rowLabelSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botoneraContainer: {
    flex: 1,
    alignItems: "center"
  },
  marginTop30: { marginTop: 30 }
});
export default Ajustes;
