import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TouchableHighlightBase } from 'react-native';

import Theme from '../Theme';
import Cell from './Cell';
import GamePadCheck from './GamePadCheck';

import { connect } from 'react-redux';
import { incrementPosX, decrementPosX, setColor, pressCheck, setLvlProgress } from '../../actions';

import Icon from "react-native-feather1s";

class GamePad extends Component {
    constructor(props) {
        super(props);
        this.lvl = this.props.game.lvl;
    }

    /*
    shouldComponentUpdate() {
        return false;
    }
    // */

    renderColorButtons = () => {
        const { setColor } = this.props;
        return (
            <View>
                <View style={styles.buttonRow}>
                    {Theme.circlesA
                        .map((x, i) =>
                            <TouchableOpacity
                                onPress={() => setColor(i)}
                                key={x} 
                                disabled={this.disabled}
                                >
                                <Cell
                                    color={i}
                                    style={{ height: 50 }} />
                            </TouchableOpacity>
                        )}
                </View>
                <View style={styles.buttonRow}>
                    {Theme.circlesB
                        .map((x, i) =>
                            <TouchableOpacity
                                onPress={() => setColor(i + 3)}
                                key={x} 
                                disabled={this.disabled}
                                >
                                <Cell
                                    color={i + 3}
                                    style={{ height: 50 }} />
                            </TouchableOpacity>
                        )}
                </View>
            </View>
        )
    }

    renderArrows = () => {
        const { incrementPosX, decrementPosX } = this.props;
        return (
            <View style={styles.arrowBox}>
                <View style={[styles.checkButton, {
                    opacity: 0
                }]} >
                    <Icon name='check' style={styles.checkIcon} />
                </View>
                <TouchableOpacity
                    onPress={decrementPosX}
                    disabled={this.disabled}
                    style={styles.arrowButton}>
                    <Icon name={'arrow-left'} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={incrementPosX}
                    disabled={this.disabled}
                    style={styles.arrowButton}>
                    <Icon name={'arrow-right'} style={styles.icon} />
                </TouchableOpacity>
                <GamePadCheck onPress={() => this.onCheckPress()} />
            </View>
        )
    }

    onCheckPress = () => {

        const { pressCheck, game, setLvlProgress, outOfAttempts, winScreen } = this.props;
        const { board, posY, ans, lvl, width, attempts } = game;

        let boardRow = board[posY].slice(),
            answer = ans.slice(),
            black = 0,
            white = 0;

        for (let i = 0; i < boardRow.length; i++) {
            switch (boardRow[i]) {
                case null:
                    continue;
                case '':
                    return;
                case answer[i]:
                    black++;
                    answer[i] = boardRow[i] = null;
                    continue
            }
        }

        for (let i = 0; i < boardRow.length; i++) {
            let circle = boardRow[i];
            if (circle === null) continue;
            let index = answer.indexOf(circle);
            if (index != -1) {
                white++;
                answer[index] = null;
            }
        }

        pressCheck([black, white]);

        if (black == (width + 1)) {
            setLvlProgress(lvl, 'c');
            winScreen();
        } else if (attempts < 2) {
            //console.log('no more attempts');
            outOfAttempts();
        }

    }
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <View style={styles.gamePad}>
                {this.renderArrows()}
                <View style={styles.buttonBox} >
                    {this.renderColorButtons()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gamePad: {
        alignItems: 'center',
        borderTopWidth: 1,
        paddingVertical: 5,
        paddingBottom: 15,
    },

    arrowBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    arrowButton: {
        borderWidth: 1,
        borderColor: Theme.border,
        height: 42,
        borderRadius: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },

    buttonBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonRow: {
        flexDirection: 'row',
    },

    icon: {
        color: Theme.text,
        fontSize: 28,
    },

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

export default connect(mapStateToProps, { incrementPosX, decrementPosX, setColor, pressCheck, setLvlProgress })(GamePad);