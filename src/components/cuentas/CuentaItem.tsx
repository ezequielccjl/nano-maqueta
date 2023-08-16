import { View, Text, StyleSheet, Image, Pressable, FlatList, Touchable, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { useFonts } from "expo-font";
import data, { IData } from "../../data/data";
import CuentaTile from "./cuenta-tile";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from "../Input";

const CuentaItem = () => {
  const headerHeight = useHeaderHeight();

  const [cuenta, setCuenta] = useState<any>({});
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
    MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
    MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
    MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  useEffect(() => {
    const unaCuenta = data[0];
    setCuenta(unaCuenta);
  }, []);

  if (!loaded) {
    return null;
  }

  const formatData = (data) => {
    const dataFormat = data.map((zona, i) => {
      return { ...zona, key: i }
    })

    return dataFormat
  }

  const calculateBorderRadius = (index, itemCount) => {
    const isFirstElement = index === 0;
    const isLastElement = index === itemCount - 1;

    if (isFirstElement) {
      return { borderTopLeftRadius: 10 };
    } else if (index === 1) {
      return { borderTopRightRadius: 10 };
    } else if (isLastElement) {
      return { borderBottomRightRadius: 10 };
    } else if (index === itemCount - 2 && itemCount % 2 === 0) {
      return { borderBottomLeftRadius: 10 };
    }

    return {};
  };

  const getRowBackgroundColor = (index) => {
    return index % 2 === 0 ? '#FFFFFF' : '#F9F9F9';
  };

  const ItemRender = ({ item, index }) => {
    return (
      <View style={{ ...gridStyles.item, backgroundColor: getRowBackgroundColor(Math.floor(index / 2)), ...calculateBorderRadius(index, cuenta.zonas.length) }}>
        <View style={gridStyles.stateDot}></View>
        <Text style={gridStyles.text}>{item.name}</Text>
        <MaterialIcons name="edit" size={24} color="black" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.listRedirect}>Particiones</Text>
          <View style={{ marginTop: -10 /*TODO: Remove Hardcoding*/ }}>
            <FontAwesome5 name="list-alt" size={20} color="#FFFFFF" />
          </View>
        </View>
        <CuentaTile cuenta={cuenta} hasButton={false} />
      </View>
      <View style={{ marginTop: 230 }}>
        <Pressable style={styles.btnDesarmar}>
          <Text style={styles.mavenGray20}>Desarmar</Text>
        </Pressable>
      </View>
      <View style={styles.zonasContainer}>
        <Text style={styles.titleZonas}>Zonas</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.mavenGray20, { marginRight: 9 }]}>Recordar clave</Text>
          <TouchableOpacity
            style={[styles.outerSwitch, isOn ? { justifyContent: 'flex-end', backgroundColor: '#FF3232' } : { justifyContent: 'flex-start', backgroundColor: '#D9D9D9' }]}
            activeOpacity={1}
            onPress={toggleSwitch}>
            <View style={styles.innerSwitch} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 15 }}>
        <Input placeholder={'Buscar'} />
      </View>
      <View style={gridStyles.container}>
        <FlatList
          data={formatData(cuenta?.zonas)}
          keyExtractor={item => item.key}
          renderItem={({ item, index }) => <ItemRender item={item} index={index} />}
          numColumns={2}
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
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
    marginLeft: 20,
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
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerSwitch: {
    width: 22,
    height: 22,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 8,
  },
  outerSwitch: {
    width: 50,
    height: 29,
    backgroundColor: 'gray',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 4,

  }
});

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 17,
  },
  text: {
    fontFamily: 'MavenProMedium',
    fontSize: 20
  },
  stateDot: {
    backgroundColor: '#59C300',
    width: 15,
    height: 15,
    borderRadius: 50
  }
})

export default CuentaItem;
