import React from "react";
import {
  FlatList,
  StyleSheet,
  View
} from "react-native";
import { apiCuentas } from "../../data/data";
import CuentaTile from "./cuenta-tile";

const ListaCuentas = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={apiCuentas}
        renderItem={({ item }) => (
          <CuentaTile navigation={navigation} cuenta={item} hasButton={true} />
        )}
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
    overflow: "hidden",
  },
});

export default ListaCuentas;
