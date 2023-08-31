import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemGridWithCheckbox = ({ item, index, lenghtData }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View
      style={{
        ...gridStyles.item,
        backgroundColor: getRowBackgroundColor(Math.floor(index / 2)),
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
      <Text style={gridStyles.text}>
        {item.name.length > 7 ? `${item.name.slice(0, 7)}...` : item.name}
      </Text>
    </View>
  );
};

const getRowBackgroundColor = (index) => {
  return index % 2 === 0 ? "#FFFFFF" : "#F9F9F9";
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
