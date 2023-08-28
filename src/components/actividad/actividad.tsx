import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import CuentaTile from "../cuentas/cuenta-tile";
import { ICuenta, apiCuentas, apiActividad, IActividad } from "../../data/data";
import { useFonts } from "expo-font";
import { Background } from "@react-navigation/elements";
import ItemActividad from "./actividad-item";
import Navbar from "../navbar/navbar";

const Actividad = ({ navigation }) => {
  const [cuenta, setCuenta] = useState<ICuenta>();
  const [actividad, setActividad] = useState<IActividad[]>([]);

  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  useEffect(() => {
    const unaCuenta = apiCuentas[0];
    setCuenta(unaCuenta);
    setActividad(apiActividad);
  }, []);

  if (!loaded) {
    return null;
  }

  const agruparPorFechas = (
    lista: IActividad[]
  ): { fecha: string; actividades: IActividad[] }[] => {
    const grupos: Record<string, IActividad[]> = lista.reduce(
      (accumulator, objeto) => {
        const fecha = objeto.fecha;
        if (!accumulator[fecha]) {
          accumulator[fecha] = [];
        }
        accumulator[fecha].push(objeto);
        return accumulator;
      },
      {}
    );

    return Object.keys(grupos).map((fecha) => ({
      fecha,
      actividades: grupos[fecha],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Navbar
        navigation={navigation}
        title={"Actividad"}
        hasBack={true}
        hasEdit={false}
      />
      <View style={styles.header}>
        <CuentaTile navigation={navigation} cuenta={cuenta} hasButton={false} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={agruparPorFechas(actividad)}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <ItemActividad
              item={item}
              index={index}
              lenghtData={agruparPorFechas(actividad).length}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF3232",
    justifyContent: "center",
    alignItems: "center",
    height: 230,
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontFamily: "MavenProBold",
    color: "white",
  },
  container: {
    flex: 1,
  },
  listRedirect: {
    color: "white",
    fontFamily: "MavenProMedium",
    marginBottom: 13,
    marginRight: 15,
    fontSize: 18,
  },
  listContainer: {
    flex: 1,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
});

export default Actividad;
