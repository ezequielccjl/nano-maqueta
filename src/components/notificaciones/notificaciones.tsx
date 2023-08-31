import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { useHeaderHeight } from "@react-navigation/elements";
import { INotificaciones, apiNotificaiones } from "../../data/data";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Notificaciones = ({ navigation }) => {
  const [notificaciones, setNotificaciones] = useState([]);
  const headerHeight = useHeaderHeight();
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  useEffect(() => {
    setNotificaciones(apiNotificaiones);
  }, []);

  if (!loaded) {
    return null;
  }

  const LimpiarButton = () => {
    return (
      <TouchableOpacity
        style={styles.cleanBtn}
        onPress={() => setNotificaciones([])}
      >
        <View style={styles.contCleanText}>
          <Text style={styles.cleanText}>Limpiar</Text>
        </View>
        <View style={styles.cleanArrow}>
          <MaterialIcons name="delete-outline" size={24} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    );
  };

  const NotificationItem = ({ item }: { item: INotificaciones }) => {
    return (
      <View style={styles.notiItem}>
        <Text style={styles.asunto}>{item.asunto}</Text>
        <Text style={styles.fecha}>{item.fecha}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <Text style={[styles.title, { top: 230 / 2 - headerHeight / 1.5 }]}>
            Ajustes
          </Text>
        </View>
      </View>
      {notificaciones.length ? (
        <View style={{ marginTop: 150, marginBottom: 70 }}>
          <FlatList
            data={notificaciones}
            renderItem={({ item }) => <NotificationItem item={item} />}
          />
        </View>
      ) : (
        <Text style={styles.empty}>
          No se encontraron notificaciones disponibles.
        </Text>
      )}

      <LimpiarButton />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#FF3232",
    justifyContent: "center",
    alignItems: "center",
    height: 230,
  },
  title: {
    position: "absolute",
    fontSize: 30,
    fontFamily: "MavenProBold",
    color: "white",
  },
  container: {
    flex: 1,
  },
  empty: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
    color: "#6F6F6F",
    textAlign: "center",
    marginTop: 260,
  },
  notiItem: {
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    paddingTop: 22,
    paddingLeft: 20,
    borderRadius: 10,
  },
  asunto: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
    paddingRight: 13,
  },
  fecha: {
    fontFamily: "MavenProMedium",
    fontSize: 15,
    color: "#6F6F6F",
    textAlign: "right",
    paddingRight: 7,
  },
  cleanBtn: {
    position: "absolute",
    flexDirection: "row",
    width: 140,
    height: 40,
    bottom: 90,
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
  cleanArrow: {
    backgroundColor: "#6F6F6F",
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  contCleanText: {
    justifyContent: "center",
    width: 105,
  },
  cleanText: {
    fontFamily: "MavenProSemiBold",
    fontSize: 17,
    color: "#6F6F6F",
    textAlign: "center",
  },
});

export default Notificaciones;
