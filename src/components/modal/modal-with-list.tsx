import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-paper";
import { ICuenta, apiCuentas } from "../../data/data";
import { FlatList } from "react-native";
import ItemGrid from "../item-grid";

const CustomModalList = ({
  isModalOpen,
  setIsModalOpen,
  title,
  titleList,
  subtitle,
  placeholder,
  submitText,
  hasInput,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  title: string;
  titleList?: string;
  subtitle?: string;
  placeholder?: string;
  submitText: string;
  hasInput: boolean;
}) => {
  const [cuenta, setCuenta] = useState<any>({});
  const [text, setText] = useState("");
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

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const formatData = (data) => {
    const dataFormat = data?.map((zona, i) => {
      return { ...zona, key: i };
    });

    return dataFormat;
  };

  return (
    <Modal visible={isModalOpen} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          {hasInput && (
            <View>
              <TextInput
                label={placeholder}
                value={text}
                mode="flat"
                underlineColor="#FF3232"
                activeUnderlineColor="#FF3232"
                onChangeText={(text) => setText(text)}
                style={{
                  backgroundColor: "#FFFFFF",
                  fontFamily: "MavenProMedium",
                }}
              />
            </View>
          )}

          {titleList && <Text style={styles.titleList}>{titleList}</Text>}

          <View style={styles.listContainer}>
            <FlatList
              data={formatData(cuenta?.zonas)}
              keyExtractor={(item) => item.key}
              renderItem={({ item, index }) => (
                <ItemGrid
                  item={item}
                  index={index}
                  hasState={false}
                  lenghtData={cuenta.zonas.length}
                  isParticion={false}
                  hasEdit={false}
                />
              )}
              numColumns={2}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.btnCancelar}
              onPress={() => handleClose()}
            >
              <Text style={styles.textCancelar}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnEnviar}
              onPress={() => handleClose()}
            >
              <Text style={styles.textEnviar}>{submitText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btnCancelar: {
    width: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 6,
  },
  btnEnviar: {
    width: 100,
    backgroundColor: "#6F6F6F",
    borderRadius: 5,
    paddingVertical: 6,
  },
  textCancelar: {
    textAlign: "center",
    fontFamily: "MavenProMedium",
    fontSize: 15,
  },
  textEnviar: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "MavenProMedium",
    fontSize: 15,
  },
  title: {
    fontFamily: "MavenProBold",
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "MavenProMedium",
    fontSize: 17,
    marginTop: 10,
  },
  titleList: {
    marginTop: 25,
    fontFamily: "MavenProSemiBold",
    fontSize: 17,
  },
  listContainer: {
    height: 120,
    marginTop: 10,
    borderColor: "rgba(111, 111, 111,0.5)",
    borderStyle: "solid",
    borderWidth: 2,
  },
});

export default CustomModalList;
