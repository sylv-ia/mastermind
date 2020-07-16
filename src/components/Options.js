import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Theme from './Theme';

const Options = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>
                    about
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>
                    remove ads
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        margin: 10,
    },
    text: {
        color: Theme.text,

    }
})

export default Options;