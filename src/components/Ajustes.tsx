import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import Switch from './util/switch';

const Ajustes = () => {

    const [notificationOn, setNotificationOn] = useState(false)
    const [soundOn, setSoundOn] = useState(false)
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

    const toggleSwitch = (state, setState) => {
        setState(!state);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ position: 'absolute', top: 230 / 2 - headerHeight / 1.5, fontSize: 30, fontFamily: 'MavenProBold', color: 'white' }}>Ajustes</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.botonera}>
                    <View style={styles.rowLabelSwitch}>
                        <Text style={styles.textLabel}>Notificaciones</Text>
                        <Switch toggleSwitch={() => toggleSwitch(notificationOn, setNotificationOn)} isOn={notificationOn} />
                    </View>
                    <View style={[styles.rowLabelSwitch, { marginTop: 20 }]}>
                        <Text style={styles.textLabel}>Sonidos</Text>
                        <Switch toggleSwitch={() => toggleSwitch(soundOn, setSoundOn)} isOn={soundOn} />
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', }}>
                    <TouchableOpacity style={styles.btnCerrarSesion}>
                        <Text style={styles.btnText}>Cerrar sesión</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.btnTextGray}>Cambiar código proveedor</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.btnTextGray}>Cambiar conexión Back-End</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#FF3232',
        justifyContent: 'center',
        alignItems: 'center',
        height: 230,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 150,
    },
    botonera: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 40,
        paddingHorizontal: 33,
        borderRadius: 10
    },
    btnCerrarSesion: {
        width: 220,
        backgroundColor: '#DB3641',
        paddingVertical: 11,
        borderRadius: 10,
        marginTop: 50
    },
    btnText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'MavenProMedium',
        fontSize: 20
    },
    btnTextGray: {
        color: '#6F6F6F',
        fontFamily: 'MavenProSemiBold',
        fontSize: 15
    },
    textLabel: {
        fontFamily: 'MavenProMedium',
        fontSize: 20
    },
    rowLabelSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Ajustes