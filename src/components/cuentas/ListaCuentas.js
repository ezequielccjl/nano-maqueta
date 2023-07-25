import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import data from '../../data/data.js'

const ListaCuentas = () => {
    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item }) => (
                <View key={item.id} style={styles.item}>
                    <View>
                        <View style={styles.dot}>
                            <Text>{item.name.charAt(0)}</Text>
                        </View>
                        <View>
                            <Text>{item.btn}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>Alarma {item.estado}</Text>
                        <Text>Partición {item.particion}</Text>
                    </View>
                    <View style={styles.redirect}></View>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        borderRadius: 15
    }
})

export default ListaCuentas