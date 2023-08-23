import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { useFonts } from "expo-font";
import { ICuenta, apiCuentas } from "../../data/data";
import CuentaTile from "./cuenta-tile";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Input from "../Input";
import ItemGrid from "../item-grid";
import Switch from "../util/switch";
import Navbar from "../navbar/navbar";

const CuentaItem = () => {
  const headerHeight = useHeaderHeight();

  const [cuenta, setCuenta] = useState<any>({});
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

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

  if (!loaded) {
    return null;
  }

  const formatData = (data) => {
    const dataFormat = data?.map((zona, i) => {
      return { ...zona, key: i };
    });

    return dataFormat;
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.listRedirect}>Particiones</Text>
          <View style={{ marginTop: -10 /*TODO: Remove Hardcoding*/ }}>
            <FontAwesome5 name="list-alt" size={20} color="#FFFFFF" />
          </View>
        </View>
        <CuentaTile cuenta={cuenta} hasButton={false} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View>
          <Pressable style={styles.btnDesarmar}>
            <Text style={styles.mavenGray20}>Desarmar</Text>
          </Pressable>
        </View>

        <View style={styles.zonasContainer}>
          <Text style={styles.titleZonas}>Zonas</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.mavenGray20, { marginRight: 9 }]}>
              Recordar clave
            </Text>
            <Switch toggleSwitch={toggleSwitch} isOn={isOn} />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Input placeholder={"Buscar"} />
        </View>
        <View style={gridStyles.container}>
          <FlatList
            data={formatData(cuenta?.zonas)}
            keyExtractor={(item) => item.key}
            renderItem={({ item, index }) => (
              <ItemGrid
                item={item}
                index={index}
                hasState={true}
                lenghtData={cuenta.zonas.length}
              />
            )}
            numColumns={2}
          />
        </View>
      </View>
    </View>
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
  btnDesarmar: {
    backgroundColor: "#FFFFFF",
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#6F6F6F",
  },
  mavenGray20: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
    color: "#6F6F6F",
  },
  titleZonas: {
    fontFamily: "MavenProMedium",
    fontSize: 25,
  },
  zonasContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default CuentaItem;
