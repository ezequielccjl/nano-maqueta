import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useHeaderHeight } from "@react-navigation/elements";
import { INotificaciones, apiNotificaiones } from "../data/data";

const Notificaciones = () => {
  const headerHeight = useHeaderHeight();
  const [loaded] = useFonts({
    MavenProBold: require("../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

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
          <Text
            style={{
              position: "absolute",
              top: 230 / 2 - headerHeight / 1.5,
              fontSize: 30,
              fontFamily: "MavenProBold",
              color: "white",
            }}
          >
            Nofiticaciones
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 150 }}>
        <FlatList
          data={apiNotificaiones}
          ItemSeparatorComponent={() => <Text></Text>}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      </View>
      <Text style={styles.empty}>
        No se encontraron notificaciones disponibles.
      </Text>
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
});

export default Notificaciones;
