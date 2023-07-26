import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import ListaCuentas from './cuentas/ListaCuentas';
import { useHeaderHeight } from '@react-navigation/elements';

const Cuentas = () => {
    const headerHeight = useHeaderHeight();
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
                <Text style={{ ...styles.title, position: 'absolute', top: (230 / 2) - (headerHeight / 1.5) }}>Cuentas</Text>
            </View>
            <ListaCuentas />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF3232',
        justifyContent: 'center',
        alignItems: 'center',
        height: 230,
    },
    title: {
        fontSize: 30,
        fontFamily: 'MavenProBold',
        color: 'white',
    }
})

export default Cuentas