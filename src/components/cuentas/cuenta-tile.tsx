import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomModal from "../modal/modal";
import CustomModalWithList from "../modal/modal-with-list";

const CuentaTile = ({
  navigation,
  cuenta,
  hasButton,
}: {
  navigation: any;
  cuenta: any;
  hasButton: any;
}) => {
  const [isModalListOpen, setIsModalListOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  const handleOnPressArmar = () => {
    setIsModalListOpen(true);
  };

  const submitEvent = () => {
    navigation.navigate("Auth");
  };

  return (
    <View style={styles.containerTile}>
      <View
        key={cuenta?.id}
        style={[
          styles.item,
          !hasButton && { paddingRight: 50 },
          hasButton && { width: "90%" },
        ]}
      >
        <View style={styles.whiteContainerTile}>
          <View style={styles.iconCuentaContainer}>
            <View
              style={[
                styles.dot,
                cuenta?.estado === "Armada" ? { backgroundColor: "#37DB5F" } : { backgroundColor: "#DB3641" },
              ]}
            >
              <Text style={styles.textDot}>{cuenta?.name?.charAt(0)}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnAction}
              onPress={handleOnPressArmar}
            >
              <Text style={styles.btnActionText}>{cuenta?.btn}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionTitle}>
              <Text style={styles.name}>
                {cuenta?.name}
              </Text>
              {!hasButton && (
                <TouchableOpacity
                  onPress={() => setIsModalOpen(true)}
                  style={styles.btnEditName}
                >
                  <MaterialIcons name="edit" size={20} color="black" />
                </TouchableOpacity>
              )}
            </View>
            <Text
              style={styles.estado}
            >
              Alarma {cuenta?.estado}
            </Text>
            <Text
              style={styles.descriptionSubtitle}
            >
              Partición {cuenta?.particion}
            </Text>
            <Text
              style={styles.descriptionSubtitle}
            >
              Panel: {cuenta?.panel}
            </Text>
          </View>
        </View>
        {hasButton && (
          <TouchableOpacity
            style={styles.redirect}
            onPress={() => navigation.navigate("CuentaItem")}
          >
            <Image source={require("../../../assets/imgs/arrow-right.png")} />
          </TouchableOpacity>
        )}
      </View>

      <CustomModalWithList
        isModalOpen={isModalListOpen}
        setIsModalOpen={setIsModalListOpen}
        title="Excluir zonas manualmente"
        hasInput={false}
        submitText={"Armar"}
        submitEvent={submitEvent}
      />
      <CustomModal
        isModalOpen={isModalOpen}
        title={"Ingrese nuevo nombre"}
        placeholder={"Nombre Cuenta"}
        setIsModalOpen={setIsModalOpen}
        setSubtitle={() => { }}
        subtitle={undefined}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    fontFamily: "MavenProMedium",
    justifyContent: "space-between",
  },
  dot: {
    borderRadius: 50,
    width: 66,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
  },
  textDot: {
    color: "white",
    fontSize: 35,
    fontFamily: "MavenProMedium",
  },
  btnAction: {
    backgroundColor: "#6F6F6F",
    width: 100,
    alignItems: "center",
    borderRadius: 15,
    paddingTop: 3,
    paddingBottom: 4,
    marginTop: 6,
  },
  btnActionText: {
    color: "white",
    fontSize: 14,
    fontFamily: "MavenProMedium",
  },
  redirect: {
    backgroundColor: "#6F6F6F",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  containerTile: {
    alignItems: "center",
    marginBottom: 10
  },
  whiteContainerTile: {
    flexDirection: "row"
  },
  iconCuentaContainer: {
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 26,
    paddingTop: 26,
  },
  descriptionContainer: {
    justifyContent: "center"
  },
  descriptionTitle: {
    flexDirection: "row"
  },
  name: {
    fontSize: 20,
    fontFamily: "MavenProMedium"
  },
  btnEditName: {
    justifyContent: "center",
    marginLeft: 5
  },
  estado: {
    fontSize: 19,
    color: "#6F6F6F",
    fontFamily: "MavenProMedium",
  },
  descriptionSubtitle: {
    fontSize: 15,
    color: "#6F6F6F",
    fontFamily: "MavenProMedium",
  }
});

export default CuentaTile;
