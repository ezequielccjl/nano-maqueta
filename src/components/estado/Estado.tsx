import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Estado = () => {
    const [loaded] = useFonts({
        MavenProBold: require("../../../assets/fonts/MavenPro-Bold.ttf"),
        MavenProRegular: require("../../../assets/fonts/MavenPro-Regular.ttf"),
        MavenProMedium: require("../../../assets/fonts/MavenPro-Medium.ttf"),
        MavenProSemiBold: require("../../../assets/fonts/MavenPro-SemiBold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>Estado</Text>
            <View style={styles.dot}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 11,
        width: 120,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 20
    },
    estadoText: {
        fontFamily: 'MavenProMedium'
    },
    dot: {
        width: 20,
        height: 20,
        backgroundColor: '#59C300',
        borderRadius: 50
    }
})

export default Estado