import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import VirtualKeyboard from "react-native-virtual-keyboard";
import React, { useEffect, useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { useFonts } from "expo-font";

const Authentication = ({ navigation }) => {
  const [password, setPassword] = useState<string>("");
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
  });

  useEffect(() => {
    console.log(password);
  }, [password]);

  if (!loaded) {
    return null;
  }

  const handleInput = (value) => {
    if (value.length <= 4) {
      setPassword(value);
    }
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "MavenProBold",
            color: "white",
          }}
        >
          Ingresar clave
        </Text>
        <View style={styles.dotContainer}>
          <View
            style={[
              styles.dotBorder,
              password.length >= 1 && { backgroundColor: "white" },
            ]}
          />
          <View
            style={[
              styles.dotBorder,
              password.length >= 2 && { backgroundColor: "white" },
            ]}
          />
          <View
            style={[
              styles.dotBorder,
              password.length >= 3 && { backgroundColor: "white" },
            ]}
          />
          <View
            style={[
              styles.dotBorder,
              password.length >= 4 && { backgroundColor: "white" },
            ]}
          />
        </View>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.line} />
        <VirtualKeyboard
          color="#6F6F6F"
          pressMode="string"
          onPress={(val) => handleInput(val)}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.touchableText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    backgroundColor: "#FF3232",
    justifyContent: "center",
    alignItems: "center",
    height: 290,
  },
  keyboardContainer: {},
  touchable: {
    backgroundColor: "#6F6F6F",
    paddingVertical: 33,
    marginTop: 20,
  },
  touchableText: {
    color: "#FFFFFF",
    fontFamily: "MavenProMedium",
    fontSize: 20,
    textAlign: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#6F6F6F",
  },
  dotContainer: {
    flexDirection: "row",
    marginTop: 52,
    width: 140,
    justifyContent: "space-around",
  },
  dotBorder: {
    width: 10,
    height: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
});

export default Authentication;
