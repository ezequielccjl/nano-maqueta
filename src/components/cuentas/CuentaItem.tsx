import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Touchable,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { useFonts } from "expo-font";
import { ICuenta, apiCuentas } from "../../data/data";
import CuentaTile from "./cuenta-tile";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Input from "../util/Input";
import ItemGrid from "../item-grid";
import Switch from "../util/switch";
import Navbar from "../navbar/navbar";
import { AntDesign } from "@expo/vector-icons";

const CuentaItem = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  const [cuenta, setCuenta] = useState<any>({});
  const [isOn, setIsOn] = useState(false);

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

  const ActividadButton = () => {
    return (
      <TouchableOpacity
        style={styles.actBtn}
        onPress={() => navigation.navigate("Actividad")}
      >
        <View style={styles.contActText}>
          <Text style={styles.actText}>Actividad</Text>
        </View>
        <View style={styles.actArrow}>
          <AntDesign name="arrowright" size={20} color="white" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ActividadButton />
      <Navbar />
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Particiones")}
        >
          <Text style={styles.listRedirect}>Particiones</Text>
          <View style={{ marginTop: -10 /*TODO: Remove Hardcoding*/ }}>
            <FontAwesome5 name="list-alt" size={20} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <CuentaTile navigation={navigation} cuenta={cuenta} hasButton={false} />
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <ItemGrid
                item={item}
                index={index}
                hasState={true}
                hasEdit={true}
                lenghtData={cuenta.zonas.length}
                isParticion={false}
              />
            )}
            numColumns={2}
          />
        </View>
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
    position: "relative",
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
  actBtn: {
    position: "absolute",
    flexDirection: "row",
    width: 140,
    height: 40,
    bottom: 20,
    right: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    zIndex: 10,
    justifyContent: "space-between",
    borderColor: "#6F6F6F",
    borderStyle: "solid",
    borderWidth: 1,
    // Propiedades de sombra para Android (elevation) y iOS (shadow)
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  actArrow: {
    backgroundColor: "#6F6F6F",
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  contActText: {
    justifyContent: "center",
    width: 105,
  },
  actText: {
    fontFamily: "MavenProMedium",
    fontSize: 15,
    color: "#6F6F6F",
    textAlign: "center",
  },
});

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default CuentaItem;
