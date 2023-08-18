import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Input = ({ onFocus = () => {}, ...props }) => {
  const [loaded] = useFonts({
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
  });

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="#6F6F6F" />
      <TextInput
        autoCorrect={false}
        onFocus={() => {
          onFocus();
        }}
        {...props}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 17,
    marginLeft: 10,
    fontFamily: "MavenProMedium",
  },
});

export default Input;
