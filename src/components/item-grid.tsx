import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import CustomModalList from "./modal/modal-with-list";
import CustomModal from "./modal/modal";
import Toast from "react-native-toast-message";

const ItemGrid = ({
  item,
  index,
  lenghtData,
  hasState,
  hasEdit,
  isParticion,
  openToast,
}: {
  item: any;
  index: any;
  lenghtData: any;
  hasState: any;
  hasEdit: any;
  isParticion: any;
  openToast?: any;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    return index % 2 === 0 ? "#FFFFFF" : "#F9F9F9";
  };

  return (
    <View
      style={{
        ...gridStyles.item,
        backgroundColor: getRowBackgroundColor(Math.floor(index / 2)),
        ...calculateBorderRadius(index, lenghtData),
      }}
    >
      {hasState && (
        <View
          style={[
            gridStyles.stateDot,
            { backgroundColor: item.activated ? "#59C300" : "#DB3641" },
          ]}
        />
      )}
      <TouchableWithoutFeedback onPress={openToast}>
        <Text style={gridStyles.text}>
          {item.name.length > 6 ? `${item.name.slice(0, 6)}...` : item.name}
        </Text>
      </TouchableWithoutFeedback>
      {hasEdit && (
        <TouchableOpacity onPress={() => setIsModalOpen(true)}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
      )}
      {isParticion ? (
        <CustomModalList
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="Editar Partición"
          subtitle="Ingrese nuevo nombre"
          hasInput={true}
          placeholder="Nombre"
          titleList="Zonas asociadas a la partición"
          submitText="Guardar"
          submitEvent={() => {
            setIsModalOpen(false);
          }}
        />
      ) : (
        <CustomModal
          isModalOpen={isModalOpen}
          title={"Ingrese nuevo nombre"}
          placeholder={"Nombre Zona"}
          setIsModalOpen={setIsModalOpen}
          setSubtitle={() => {}}
          subtitle={undefined}
        />
      )}
    </View>
  );
};

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
  },
  text: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
  },
  stateDot: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
});

export default ItemGrid;
