import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import InputBuscador from "../util/buscador-input";
import { useFonts } from "expo-font";
import { apiCuentas } from "../../data/data";
import ItemGrid from "../util/item-grid";

const ListaParticiones = () => {
  const [cuenta, setCuenta] = useState<any>({});
  const [loaded] = useFonts({
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
  });

  useEffect(() => {
    const unaCuenta = apiCuentas[0];
    setCuenta(unaCuenta);
  }, []);

  const formatData = (data) => {
    const dataFormat = data?.map((zona, i) => {
      return { ...zona, key: i };
    });
    return dataFormat;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione Partición</Text>
      <View style={styles.inputContainer}>
        <InputBuscador placeholder={"Buscar"} />
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={formatData(cuenta?.particiones)}
          keyExtractor={(item) => item.key}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <ItemGrid
              item={item}
              index={index}
              lenghtData={cuenta.particiones.length}
              hasState={false}
              hasEdit={true}
              isParticion={true}
            />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontFamily: "MavenProMedium",
    fontSize: 25,
  },
  inputContainer: {
    marginTop: 15
  },
  flatlistContainer: {
    flex: 1,
    marginVertical: 20,
  }
});


export default ListaParticiones;
