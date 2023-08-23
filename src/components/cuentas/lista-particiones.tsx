import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../util/Input";
import { useFonts } from "expo-font";
import { apiCuentas } from "../../data/data";
import ItemGrid from "../item-grid";

const ListaParticiones = () => {
  const [cuenta, setCuenta] = useState<any>({});
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
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
      <View style={{ marginTop: 15 }}>
        <Input placeholder={"Buscar"} />
      </View>
      <View style={gridStyles.container}>
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
});

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default ListaParticiones;
