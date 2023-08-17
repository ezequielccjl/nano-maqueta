import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Notificaciones = () => {

    const [loaded] = useFonts({
        MavenProBold: require("../../assets/fonts/MavenPro-Bold.ttf"),
        MavenProRegular: require("../../assets/fonts/MavenPro-Regular.ttf"),
        MavenProMedium: require("../../assets/fonts/MavenPro-Medium.ttf"),
        MavenProSemiBold: require("../../assets/fonts/MavenPro-SemiBold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 30, fontFamily: 'MavenProBold', color: 'white' }}>Notificaciones</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF3232',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
    }
})

export default Notificaciones