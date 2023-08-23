import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import CuentaItem from "./CuentaItem";

const CuentaTile = ({
  navigation,
  cuenta,
  hasButton,
}: {
  navigation?: any;
  cuenta: any;
  hasButton: any;
}) => {
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  return (
    <View style={{ alignItems: "center", marginBottom: 10 }}>
      <View
        key={cuenta?.id}
        style={[
          styles.item,
          !hasButton && { paddingRight: 50 },
          hasButton && { width: "90%" },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              alignItems: "center",
              paddingRight: 10,
              paddingLeft: 10,
              paddingBottom: 26,
              paddingTop: 26,
            }}
          >
            <View
              style={{
                ...styles.dot,
                backgroundColor:
                  cuenta?.estado === "Armada" ? "#37DB5F" : "#DB3641",
              }}
            >
              <Text style={styles.textDot}>{cuenta?.name?.charAt(0)}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnAction}
              onPress={() => navigation.navigate("Auth")}
            >
              <Text style={styles.btnActionText}>{cuenta?.btn}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontFamily: "MavenProMedium" }}>
              {cuenta?.name}
            </Text>
            <Text
              style={{
                fontSize: 19,
                color: "#6F6F6F",
                fontFamily: "MavenProMedium",
              }}
            >
              Alarma {cuenta?.estado}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#6F6F6F",
                fontFamily: "MavenProMedium",
              }}
            >
              Partición {cuenta?.particion}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#6F6F6F",
                fontFamily: "MavenProMedium",
              }}
            >
              Partición {cuenta?.panel}
            </Text>
          </View>
        </View>
        {hasButton && (
          <TouchableOpacity
            style={styles.redirect}
            onPress={() => navigation.navigate("CuentaItem")}
          >
            <Image source={require("../../../assets/imgs/arrow-right.png")} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    marginBottom: 70,
  },
  absoluteContainer: {
    position: "absolute",
    top: 150,
  },
  item: {
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    fontFamily: "MavenProMedium",
    justifyContent: "space-between",
  },
  dot: {
    borderRadius: 50,
    width: 66,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
  },
  textDot: {
    color: "white",
    fontSize: 35,
    fontFamily: "MavenProMedium",
  },
  btnAction: {
    backgroundColor: "#6F6F6F",
    width: 100,
    alignItems: "center",
    borderRadius: 15,
    paddingTop: 3,
    paddingBottom: 4,
    marginTop: 6,
  },
  btnActionText: {
    color: "white",
    fontSize: 14,
    fontFamily: "MavenProMedium",
  },
  redirect: {
    backgroundColor: "#6F6F6F",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default CuentaTile;
