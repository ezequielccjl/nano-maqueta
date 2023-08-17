import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const ItemGrid = ({ item, index, lenghtData, hasState }) => {
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
      <Text style={gridStyles.text}>{item.name}</Text>
      <MaterialIcons name="edit" size={24} color="black" />
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
