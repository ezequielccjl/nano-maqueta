import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

const ItemGridWithCheckbox = ({ item, index, lenghtData }) => {
  const [isChecked, setChecked] = useState(false);
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
      <View style={{ marginLeft: 15 }}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={"#6F6F6F"}
          style={gridStyles.checkbox}
        />
      </View>
      <Text style={gridStyles.text}>{item.name}</Text>
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
    alignItems: "center",
    paddingTop: 17,
    paddingBottom: 17,
  },
  text: {
    fontFamily: "MavenProMedium",
    fontSize: 20,
    marginLeft: 15,
  },
  stateDot: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
});

export default ItemGridWithCheckbox;
