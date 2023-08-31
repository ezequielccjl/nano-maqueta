import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ActividadButton = ({ navigation }) => {

    const [loaded] = useFonts({
        MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
        MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
        MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
        MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
    });

    return (
        <TouchableOpacity
            style={styles.actBtn}
            onPress={() => navigation.navigate("Actividad")}
        >
            <View style={styles.contActText}>
                <Text style={styles.actText}>Actividad</Text>
            </View>
            <View style={styles.actArrow}>
                <AntDesign name="arrowright" size={20} color="white" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    actBtn: {
        position: "absolute",
        flexDirection: "row",
        width: 140,
        height: 40,
        bottom: 20,
        right: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        zIndex: 10,
        justifyContent: "space-between",
        borderColor: "#6F6F6F",
        borderStyle: "solid",
        borderWidth: 1,
        // Propiedades de sombra para Android (elevation) y iOS (shadow)
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    actArrow: {
        backgroundColor: "#6F6F6F",
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    contActText: {
        justifyContent: "center",
        width: 105,
    },
    actText: {
        fontFamily: "MavenProSemiBold",
        fontSize: 16,
        color: "#6F6F6F",
        textAlign: "center",
    },
})

export default ActividadButton