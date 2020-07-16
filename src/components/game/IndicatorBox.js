import React from 'react';
import { View, StyleSheet, Fragment } from 'react-native';
import Theme from '../Theme';

const IndicatorBox = ({ data }) => {

    let arr = [], black, white, count = 4;
    if (data && data.length > 0) {
        black = data[0];
        white = data[1];
    } else {
        black = 0;
        white = 0;
    }

    while (count != 0) {
        count--;
        if (black) {
            black--;
            arr.push(
                <View
                    key={count}
                    style={styles.circleContainer}>
                    <View style={[styles.circle, { backgroundColor: 'black',  }]} />
                </View>
            )

        } else if (white) {
            white--;
            arr.push(
                <View
                    key={count}
                    style={styles.circleContainer}>
                    <View style={[styles.circle, { backgroundColor: 'white' }]} />
                </View>
            )
        } else {
            arr.push(
                <View
                    key={count}
                    style={styles.circleContainer}>
                    <View style={[styles.circle, { backgroundColor: Theme.indicator, borderWidth: 0, height: 9 }]} />
                </View>
            )
        }

    }

    return (
        <View style={styles.box}>
            {arr}
        </View>
    )


}


const styles = StyleSheet.create({
    box: {
        height: 46,
        aspectRatio: 1,
        flexWrap: 'wrap',
        alignContent: 'stretch',
    },
    circleContainer: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        borderRadius: 50,
        aspectRatio: 1,
        height: 18,
        margin: 2.5,
        borderWidth: 1,
        borderColor: Theme.border,

    }
})


export default IndicatorBox;