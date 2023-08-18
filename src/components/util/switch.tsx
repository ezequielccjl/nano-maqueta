import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Switch = ({ toggleSwitch, isOn }) => {
    return (
        <TouchableOpacity
            style={[
                styles.outerSwitch,
                isOn
                    ? { justifyContent: "flex-end", backgroundColor: "#FF3232" }
                    : {
                        justifyContent: "flex-start",
                        backgroundColor: "#D9D9D9",
                    },
            ]}
            activeOpacity={1}
            onPress={toggleSwitch}
        >
            <View style={styles.innerSwitch} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    innerSwitch: {
        width: 22,
        height: 22,
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 8,
    },
    outerSwitch: {
        width: 50,
        height: 29,
        backgroundColor: "gray",
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 4,
    },
})

export default Switch