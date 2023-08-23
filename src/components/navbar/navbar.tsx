import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderMain from '../cuentas/HeaderCuentas'
import Estado from '../estado/Estado'
import Constants from 'expo-constants';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <Estado />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#FF3232",
        shadowColor: "transparent",
        justifyContent: 'space-between',
        paddingLeft: 17,
        paddingTop: Constants.statusBarHeight + 5
    }
})

export default Navbar