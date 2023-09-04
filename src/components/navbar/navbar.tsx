import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeaderMain from "./navbar-header";
import Estado from "./navbar-estado";
import Constants from "expo-constants";

interface INavbarProps {
  navigation: any;
  title: string;
  hasBack: boolean;
  hasEdit?: boolean;
}

const Navbar = (props: INavbarProps) => {
  return (
    <View style={styles.container}>
      <HeaderMain
        navigation={props.navigation}
        title={props.title}
        hasBack={props.hasBack}
        hasEdit={props.hasEdit}
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
