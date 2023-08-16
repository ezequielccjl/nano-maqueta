import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import data from "../../data/data.ts";
import { useFonts } from "expo-font";
import CuentaTile from "./cuenta-tile.tsx";

const ListaCuentas = () => {
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CuentaTile cuenta={item} hasButton={true} />}
        keyExtractor={(item) => item.id}
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
