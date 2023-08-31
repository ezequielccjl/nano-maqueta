import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-paper";
import { ICuenta, apiCuentas } from "../../data/data";
import { FlatList } from "react-native";
import ItemGridWithCheckbox from "./item-grid-checks";

interface IModalWithListProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  title: string;
  titleList?: string;
  subtitle?: string;
  placeholder?: string;
  submitText: string;
  submitEvent: any;
  hasInput: boolean;
}

const CustomModalWithList = (props: IModalWithListProps) => {
  const [cuenta, setCuenta] = useState<any>({});
  const [text, setText] = useState("");
  const [loaded] = useFonts({
    MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
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
    props.setIsModalOpen(false);
  };

  const formatData = (data) => {
    const dataFormat = data?.map((zona, i) => {
      return { ...zona, key: i };
    });

    return dataFormat;
  };

  return (
    <Modal visible={props.isModalOpen} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          {props.title && (
            <Text
              style={[
                styles.title,
                props.title.includes("zonas") && styles.marginTitleZonas,
              ]}
            >
              {props.title}
            </Text>
          )}
          {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
          {props.hasInput && (
            <View>
              <TextInput
                label={props.placeholder}
                value={text}
                mode="flat"
                underlineColor="#FF3232"
                activeUnderlineColor="#FF3232"
                onChangeText={(text) => setText(text)}
                style={styles.inputModal}
              />
            </View>
          )}

          {props.titleList && <Text style={styles.titleList}>{props.titleList}</Text>}

          <View style={styles.listContainer}>
            <FlatList
              data={formatData(cuenta?.zonas)}
              keyExtractor={(item) => item.key}
              renderItem={({ item, index }) => (
                <ItemGridWithCheckbox
                  item={item}
                  index={index}
                  lenghtData={cuenta.zonas.length}
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
            <TouchableOpacity style={styles.btnEnviar} onPress={props.submitEvent}>
              <Text style={styles.textEnviar}>{props.submitText}</Text>
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
    height: 150,
    marginTop: 10,
    borderColor: "rgba(111, 111, 111,0.5)",
    borderStyle: "solid",
    borderWidth: 2,
  },
  inputModal: {
    backgroundColor: "#FFFFFF",
    fontFamily: "MavenProMedium",
  },
  marginTitleZonas: {
    marginBottom: 10
  }
});

export default CustomModalWithList;
