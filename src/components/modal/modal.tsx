import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const CustomModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  subtitle,
  setSubtitle,
}) => {
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setSubtitle(undefined);
  };

  return (
    <Modal visible={isModalOpen} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.btnCancelar}
              onPress={() => handleClose()}
            >
              <Text style={styles.textCancelar}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnEnviar}
              onPress={() => handleClose()}
            >
              <Text style={styles.textEnviar}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    marginHorizontal: 20,
    height: 215,
    borderRadius: 10,
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnCancelar: {
    width: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 6,
  },
  btnEnviar: {
    width: 100,
    backgroundColor: "#6F6F6F",
    borderRadius: 5,
    paddingVertical: 6,
  },
  textCancelar: {
    textAlign: "center",
    fontFamily: "MavenProMedium",
    fontSize: 15,
  },
  textEnviar: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "MavenProMedium",
    fontSize: 15,
  },
  title: {
    fontFamily: "MavenProBold",
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "MavenProMedium",
    fontSize: 15,
    textAlign: "center",
  },
});

export default CustomModal;
