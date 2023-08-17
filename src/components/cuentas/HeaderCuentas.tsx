import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const HeaderMain = () => {

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
        <View style={styles.headerContainer}>
            <Image
                style={styles.logo}
                source={require("../../../assets/imgs/logo.png")}
            ></Image>
            <Text style={{ color: 'white', fontFamily: 'MavenProRegular', fontSize: 18 }}>Username</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 22,
        height: 22,
        marginRight: 10,
        marginLeft: 10,
    }
})

export default HeaderMain