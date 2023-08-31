import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IActividad } from "../../data/data";
import { useFonts } from "expo-font";

const ItemActividad = ({ item, index, lenghtData }) => {
  const [loaded] = useFonts({
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  const calculateBorderRadius = (index, itemCount) => {
    const isFirstElement = index === 0;
    const isLastElement = index === itemCount - 1;

    if (isFirstElement) {
      return { borderTopLeftRadius: 10, borderTopRightRadius: 10 };
    } else if (isLastElement) {
      return { borderBottomRightRadius: 10, borderBottomLeftRadius: 10 };
    }

    return {};
  };

  return (
    <View
      style={{
        ...stylesActividad.item,
        ...calculateBorderRadius(index, lenghtData),
      }}
    >
      <Text style={stylesActividad.fecha}>{item.fecha}</Text>
      {item.actividades.map((actividad: IActividad, i) => {
        return (
          <View
            style={[
              stylesActividad.actividadContainer,
              i === 0 && { paddingTop: 5 },
            ]}
            key={i}
          >
            <Text style={stylesActividad.asunto}>{actividad.asunto}</Text>
            <Text style={stylesActividad.hora}>{actividad.hora}</Text>
            <View style={stylesActividad.line}></View>
          </View>
        );
      })}
    </View>
  );
};

const stylesActividad = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 11,
    paddingTop: 20,
  },
  actividadContainer: {
    paddingTop: 16,
  },
  fecha: {
    fontFamily: "MavenProSemiBold",
    fontSize: 15,
    color: "#6F6F6F",
    paddingLeft: 5,
  },
  asunto: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
    paddingLeft: 5,
  },
  hora: {
    textAlign: "right",
    fontFamily: "MavenProMedium",
    color: "#6F6F6F",
    marginBottom: 6,
    paddingRight: 15,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E7E7E7",
  },
});

export default ItemActividad;
