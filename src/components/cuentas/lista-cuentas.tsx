import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import { apiCuentas } from "../../data/data";
import { useFonts } from "expo-font";
import CuentaTile from "./cuenta-tile";

const ListaCuentas = ({ navigation }) => {
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={apiCuentas}
        renderItem={({ item }) => <CuentaTile navigation={navigation} cuenta={item} hasButton={true} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    marginBottom: 70,
  },
});

export default ListaCuentas;
