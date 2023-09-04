import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast, { ToastConfig } from "react-native-toast-message";
import { apiCuentas } from "../../data/data";
import ItemGrid from "../util/item-grid";
import Navbar from "../navbar/navbar";
import InputBuscador from "../util/buscador-input";
import ActividadButton from "../util/actividad-button";
import Switch from "../util/switch";
import CuentaTile from "./cuenta-tile";

const CuentaItem = ({ navigation }) => {
  const [cuenta, setCuenta] = useState<any>({});
  const [isOn, setIsOn] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const toggleSwitch = () => {
    navigation.navigate("Auth");
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

  const toastConfig: ToastConfig = {
    longNameToast: ({ text1, props }) => (
      <View style={toast.container}>
        <Text style={toast.text}>{text1}</Text>
      </View>
    ),
  };

  const openToastWithName = (name) => {
    console.log(name);
    if (name.length > 6) {
      setScrollEnabled(false);
      Toast.show({
        type: "longNameToast",
        text1: name,
        position: "bottom",
        bottomOffset: 150,
        onHide: () => setScrollEnabled(true),
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ActividadButton navigation={navigation} />
      <ScrollView style={styles.container} scrollEnabled={scrollEnabled}>
        <Navbar
          navigation={navigation}
          title={"Cuenta"}
          hasBack={true}
          hasEdit={false}
        />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btnParticiones}
            onPress={() => navigation.navigate("Particiones")}
          >
            <Text style={styles.textParticiones}>Particiones</Text>
            <View style={styles.iconParticiones}>
              <FontAwesome5 name="list-alt" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <CuentaTile
            navigation={navigation}
            cuenta={cuenta}
            hasButton={false}
          />
        </View>

        <View style={styles.bodyContainer}>
          <View>
            <TouchableOpacity
              style={styles.btnDesarmar}
              onPress={() => navigation.navigate("Auth")}
            >
              <Text style={styles.mavenGray20}>Desarmar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.zonasContainer}>
            <Text style={styles.titleZonas}>Zonas</Text>
            <View style={styles.recordarContainer}>
              <Text style={[styles.mavenGray20, styles.recordarClave]}>
                Recordar clave
              </Text>
              <Switch toggleSwitch={toggleSwitch} isOn={isOn} />
            </View>
          </View>
          <View style={styles.inputBuscarContainer}>
            <InputBuscador placeholder={"Buscar"} />
          </View>
          <View style={gridStyles.container}>
            <FlatList
              data={formatData(cuenta?.zonas)}
              keyExtractor={(item) => item.key}
              scrollEnabled={false}
              renderItem={({ item, index }) => (
                <ItemGrid
                  item={item}
                  index={index}
                  hasState={true}
                  hasEdit={true}
                  lenghtData={cuenta.zonas.length}
                  isParticion={false}
                  openToast={() => openToastWithName(item.name)}
                />
              )}
              numColumns={2}
            />
          </View>
        </View>
        <Toast config={toastConfig} />
      </ScrollView>
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
  container: {
    flex: 1,
    position: "relative",
  },
  textParticiones: {
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
  btnParticiones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconParticiones: {
    marginTop: -10 /*TODO: Remove Hardcoding*/,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  recordarContainer: {
    flexDirection: "row",
  },
  recordarClave: {
    marginRight: 9,
  },
  inputBuscarContainer: {
    marginTop: 15,
  },
});

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

const toast = StyleSheet.create({
  container: {
    height: 60,
    width: "80%",
    backgroundColor: "#4B4B4B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    width: "100%",
    fontFamily: "MavenProSemiBold",
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: -5,
  },
});

export default CuentaItem;
