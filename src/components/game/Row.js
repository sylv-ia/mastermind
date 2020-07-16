import React from 'react';
import { View, StyleSheet } from 'react-native';

import Cell from './Cell';
import IndicatorBox from './IndicatorBox';
import Theme from '../Theme';

const Row = () => {

    renderCells = () => {
        let cells = [];

        for (let i = 0; i < 3; i++) {
            cells.push(<Cell key={i} />)
        }

        cells.push(<Cell key={3} active={0} />)

        return cells;
    }

    return (
        <View style={styles.row}>
            <IndicatorBox />
            {renderCells()}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Theme.border,
        borderRadius: 10,
        height: 59,
        paddingRight: 20,
        marginVertical: 10,
    }
})

export default Row;