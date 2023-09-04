import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CustomModal from "../modal/modal";

const HeaderMain = ({ navigation, title, hasEdit, hasBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loaded] = useFonts({
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      {hasBack ? (
        <Ionicons
          name="arrow-back"
          size={24}
          color="#FFFFFF"
          style={styles.iconBack}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <Image
          style={styles.logo}
          source={require("../../../assets/imgs/logo.png")}
        />
      )}
      <Text
        style={styles.title}
      >
        {title}
      </Text>
      {hasEdit && (
        <MaterialIcons
          name="edit"
          size={20}
          color="#FFFFFF"
          style={styles.iconEdit}
          onPress={() => setIsModalOpen(true)}
        />
      )}
      <CustomModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={"Ingrese su nuevo nombre"}
        placeholder={"Username"}
        subtitle={""}
        setSubtitle={() => { }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 22,
    height: 22,
    marginRight: 10,
    marginLeft: 10,
  },
  iconEdit: {
    marginLeft: 10
  },
  iconBack: {
    marginRight: 10
  },
  title: {
    color: "white",
    fontFamily: "MavenProRegular",
    fontSize: 18
  }
});

export default HeaderMain;
