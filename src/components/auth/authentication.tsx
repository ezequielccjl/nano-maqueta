import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VirtualKeyboard from "react-native-virtual-keyboard";

const Authentication = ({ navigation }) => {
  const [password, setPassword] = useState<string>("");
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
  });

  useEffect(() => {
    console.log("Password: ", password);
  }, [password]);

  if (!loaded) {
    return null;
  }

  const handleInput = (value) => {
    console.log(value);
    if (value === "back") {
      if (password.length > 0) {
        setPassword(password.slice(0, -1));
      }
    } else if (password.length < 4) {
      setPassword(password + value);
    }
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.header}>
        <Text style={styles.titleAuth}>
          Ingresar clave
        </Text>
        <View style={styles.dotContainer}>
          <View
            style={[
              styles.dotBorder,
              password.length >= 1 && styles.dotWithBg,
            ]}
          />
          <View
            style={[
              styles.dotBorder,
              password.length >= 2 && styles.dotWithBg,
            ]}
          />
          <View
            style={[
              styles.dotBorder,
              password.length >= 3 && styles.dotWithBg,
            ]}
          />
          <View
            style={[
              styles.dotBorder,
              password.length >= 4 && styles.dotWithBg,
            ]}
          />
        </View>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.line} />
        <VirtualKeyboard
          color="#6F6F6F"
          pressMode="char"
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
  titleAuth: {
    fontSize: 30,
    fontFamily: "MavenProBold",
    color: "white",
  },
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
  dotWithBg: {
    backgroundColor: "white"
  }
});

export default Authentication;
