import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import data from '../../data/data.js'
import { useFonts } from 'expo-font';
import { useHeaderHeight } from '@react-navigation/elements';

const ListaCuentas = () => {
    const headerHeight = useHeaderHeight();
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
            <FlatList
                data={data}
                ItemSeparatorComponent={() => <Text> </Text>}
                contentContainerStyle={styles.flatlistContent}
                renderItem={({ item }) => (
                    <View key={item.id} style={{ alignItems: 'center' }}>
                        <View style={styles.item}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'center', paddingRight: 10, paddingLeft: 10, paddingBottom: 26, paddingTop: 26 }}>
                                    <View style={{ ...styles.dot, backgroundColor: item.estado === 'Armada' ? '#37DB5F' : '#DB3641' }}>
                                        <Text style={styles.textDot}>{item.name.charAt(0)}</Text>
                                    </View>
                                    <View style={styles.btnAction}>
                                        <Text style={styles.btnActionText}>{item.btn}</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'MavenProMedium' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 18, color: '#6F6F6F', fontFamily: 'MavenProMedium' }}>Alarma {item.estado}</Text>
                                    <Text style={{ fontSize: 14, color: '#6F6F6F', fontFamily: 'MavenProMedium' }}>Partición {item.particion}</Text>
                                </View>
                            </View>
                            <View style={styles.redirect}>
                                <Image
                                    source={require("../../../assets/imgs/arrow-right.png")}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(238, 255, 0, 0.4)',
        position: 'absolute',
        top: 150,
    },
    flatlistContent: {
        flex: 1,
    },
    item: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        fontFamily: 'MavenProMedium',
        justifyContent: 'space-between',
    },
    dot: {
        borderRadius: 50,
        width: 66,
        height: 66,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDot: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'MavenProMedium'
    },
    btnAction: {
        backgroundColor: '#6F6F6F',
        width: 100,
        alignItems: 'center',
        borderRadius: 15,
        paddingTop: 3,
        paddingBottom: 4,
        marginTop: 6
    },
    btnActionText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'MavenProMedium'
    },
    redirect: {
        backgroundColor: '#6F6F6F',
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }
})

export default ListaCuentas