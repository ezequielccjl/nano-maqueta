import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderMain from "./navbar-header";
import Estado from "./navbar-estado";
import Constants from "expo-constants";

const Navbar = ({
  navigation,
  title,
  hasBack,
  hasEdit,
}: {
  navigation: any;
  title: string;
  hasBack: boolean;
  hasEdit?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <HeaderMain
        navigation={navigation}
        title={title}
        hasBack={hasBack}
        hasEdit={hasEdit}
      />
      <Estado />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FF3232",
    shadowColor: "transparent",
    justifyContent: "space-between",
    paddingLeft: 17,
    paddingTop: Constants.statusBarHeight + 5,
  },
});

export default Navbar;
