import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CustomModal from "../modal/modal";

const HeaderMain = ({ navigation, title, hasEdit, hasBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <View style={styles.headerContainer}>
      {hasBack ? (
        <Ionicons
          name="arrow-back"
          size={24}
          color="#FFFFFF"
          style={{ marginRight: 10 }}
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
        style={{ color: "white", fontFamily: "MavenProRegular", fontSize: 18 }}
      >
        {title}
      </Text>
      {hasEdit && (
        <MaterialIcons
          name="edit"
          size={20}
          color="#FFFFFF"
          style={{ marginLeft: 10 }}
          onPress={() => setIsModalOpen(true)}
        />
      )}
      <CustomModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={"Ingrese su nuevo nombre"}
        placeholder={"Username"}
        subtitle={""}
        setSubtitle={() => {}}
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
});

export default HeaderMain;
