import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CuentaTile = ({ cuenta, hasButton }) => {
  return (
    <View style={{ alignItems: "center", marginBottom: 10 }}>
      <View key={cuenta.id} style={styles.item}>
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
                  cuenta.estado === "Armada" ? "#37DB5F" : "#DB3641",
              }}
            >
              <Text style={styles.textDot}>{cuenta.name.charAt(0)}</Text>
            </View>
            <View style={styles.btnAction}>
              <Text style={styles.btnActionText}>{cuenta.btn}</Text>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontFamily: "MavenProMedium" }}>
              {cuenta.name}
            </Text>
            <Text
              style={{
                fontSize: 19,
                color: "#6F6F6F",
                fontFamily: "MavenProMedium",
              }}
            >
              Alarma {cuenta.estado}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#6F6F6F",
                fontFamily: "MavenProMedium",
              }}
            >
              Partición {cuenta.particion}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#6F6F6F",
                fontFamily: "MavenProMedium",
              }}
            >
              Partición {cuenta.panel}
            </Text>
          </View>
        </View>
        {hasButton && (
          <View style={styles.redirect}>
            <Image source={require("../../../assets/imgs/arrow-right.png")} />
          </View>
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
    paddingRight: 50,
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
