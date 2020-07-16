import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Theme from '../Theme';

import { connect } from 'react-redux';
import { disableHelpArrow } from '../../actions';

import Icon from "react-native-feather1s";

const GamePadCheck = (props) => {
    const { board, posY, won } = props.game;
    const active = won || board[posY].indexOf('') == -1;
    return (
        <View style={{ opacity: active ? 1 : 0.65 }}>
            <TouchableOpacity
                disabled={!active}
                onPress={() => {
                    props.onPress();
                    props.disableHelpArrow();
                }}
                style={styles.checkButton}>
                <Icon name='check' style={[styles.checkIcon, { color: active ? Theme.check : Theme.checkInactive }]} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    checkButton: {
        borderRadius: 50,
        aspectRatio: 1,
        borderWidth: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
        margin: 5,
        borderColor: Theme.border,
        backgroundColor: Theme.button,
    },
    checkIcon: {
        fontSize: 28
    }
})

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps, { disableHelpArrow })(GamePadCheck);