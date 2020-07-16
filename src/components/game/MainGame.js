import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

import * as Animatable from 'react-native-animatable'

import Grid from './Grid';
import GamePad from './GamePad';

import Theme from '../Theme';

import { connect } from 'react-redux';
import { saveGame, setLvl, moreAttempts, disableHelpArrow } from '../../actions';

import Modal from "react-native-modal";

import Icon from "react-native-feather1s";
import Svg, { Path, Line } from "react-native-svg"

import HelpScreenTemplate from '../HelpScreenTemplate';

class MainGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            helpModal: false,
        }

        this.lvl = this.props.game.lvl;

    }

    onAdClosed = () => {
    }

    componentWillUnmount() {
        this.saveTheGame();
        clearTimeout(this.helpTimeout);
    }

    componentDidMount() {
        this.helpTimeout = setTimeout(() => this.props.disableHelpArrow(), 10 * 1000);
    }

    saveTheGame() {
        const { game, saveGame } = this.props;
        saveGame(game);
    }

    winScreen = () => {
        this.setState({ modal: true })
    }

    nextLvl = () => {
        const { app, game, setLvl, saveGame } = this.props;
        saveGame(game);
        const lvl = game.lvl + 1;
        setLvl(lvl, app.lvlData[lvl]);
        this.setState({ modal: false });
    }

    renderTopBar() {
        return (
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 5,
                zIndex: 1,
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.props.navigation.goBack() }}
                >
                    <Icon name={'arrow-left'} style={styles.icon} />
                </TouchableOpacity>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={styles.text}>
                        level {this.props.game.lvl || 1}
                    </Text>
                    <Text style={styles.text}>
                        attempts left: {this.props.game.attempts}
                    </Text>
                </View>


                <View>
                    <TouchableOpacity style={[styles.button, { zIndex: 2, }]}
                        onPress={() => {
                            this.setState({ helpModal: true });
                            //this.props.disableHelpArrow();
                        }}
                    >
                        {
                            <Icon name={'help-circle'} style={[styles.icon, styles.helpIcon]} />
                        }
                    </TouchableOpacity>

                    {this.props.app.helpArrow ?
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            width: '100%',
                            aspectRatio: 1,
                            top: '100%',
                            zIndex: 1,
                        }}>

                            <Animatable.View animation={upAndDown} iterationCount={'infinite'} easing={'linear'} >
                                <View style={{ paddingVertical: 20, }}>
                                    <Svg
                                        width={24}
                                        height={150}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke={Theme.text}
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <Line x1="12" y1="150" x2="12" y2="5" />
                                        <Path d="M12 19V5M5 12l7-7 7 7" />
                                    </Svg>
                                </View>
                            </Animatable.View>
                            <Text style={[styles.text, {
                                width: '200%', alignSelf: 'flex-end', paddingRight: 5,
                            }]}>
                                click here to learn how to play
                        </Text>

                        </View>
                        :
                        null
                    }

                </View >

            </View >
        )
    }

    outOfAttempts = () => {
        this.setState({ attemptsModal: true })
    }

    tryAgain = () => {
        const { game, setLvl } = this.props;
        const lvl = game.lvl;
        setLvl(lvl);
        this.setState({ attemptsModal: false });
    }

    renderModal() {
        const { set, lvlList } = this.props.app;
        const { lvl } = this.props.game;
        const lastlvl = lvlList[set].length == lvl;
        return (
            <Modal
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                isVisible={this.state.modal}
                onRequestClose={() => {
                    this.setState({ modal: false });
                    this.props.navigation.goBack();
                    this.saveTheGame();
                }}
            >
                <View style={styles.modal}>
                    <Icon name={'check'} style={styles.modalIcon} thin={false} />
                    <Text style={styles.text}>you win!</Text>
                    {lastlvl ?
                        <>
                            <Text style={[styles.text, { paddingTop: 5, }]}>no more levels{'\n'} in this set!</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('DifficultySelector')}
                                style={styles.nextLvl}
                            >
                                <Text style={styles.text}>back to menu</Text>
                                <Icon name={'arrow-left'} style={[styles.icon, { padding: 8 }]} />
                            </TouchableOpacity>
                        </>
                        :
                        <TouchableOpacity
                            onPress={this.nextLvl}
                            style={styles.nextLvl}
                        >
                            <Text style={styles.text}>next level</Text>
                            <Icon name={'arrow-right'} style={[styles.icon, { padding: 8 }]} />
                        </TouchableOpacity>
                    }
                </View>

            </Modal>
        )
    }

    renderAttemptsModal() {
        return (
            <Modal
                style={styles.modalContainer}
                isVisible={this.state.attemptsModal}
                onRequestClose={() => {
                    this.setState({ attemptsModal: false });
                    this.props.navigation.goBack();
                    //this.tryAgain();
                }}
            >
                <View style={styles.modal}>
                    {this.state.rewarded ?
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={styles.text}>You have 6 more attempts now!</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({ attemptsModal: false, rewarded: false })}
                                style={styles.nextLvl}
                            >
                                <Icon name={'check'} style={{ color: Theme.text, fontSize: 30, padding: 5 }} thin={false} />
                            </TouchableOpacity>
                        </View>
                        :
                        this.state.rewardAdLoading ?
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={styles.text}>loading...</Text>
                            </View>
                            :
                            <>
                                <Icon name={'x'} style={[styles.modalIcon, styles.modalIconSad]} />
                                <Text style={[styles.text]}>sorry, no more attempts left</Text>
                                <TouchableOpacity
                                    onPress={this.tryAgain}
                                    style={styles.nextLvl}
                                >
                                    <Text style={styles.text}>try again</Text>
                                    <Icon name={'refresh-ccw'} style={[styles.icon, { padding: 8 }]} />
                                </TouchableOpacity>

                            </>
                    }
                </View>
            </Modal>
        )
    }

    renderHelpModal() {
        return (
            <View style={{
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                zIndex: 2
            }}>

                <HelpScreenTemplate />

                <TouchableOpacity
                    style={{ padding: 10, position: 'absolute', top: 0, right: 0, }}
                    onPress={() => {
                        this.setState({ helpModal: false });
                        this.props.disableHelpArrow();
                    }}
                >
                    <Icon name={'x'} style={{ color: '#fff', fontSize: 40, }} />
                </TouchableOpacity>

            </View>
        )
    }

    render() {
        if (this.state.helpModal) {
            return (
                <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: Theme.background, fontColor: 'white', }} >
                    {this.renderHelpModal()}
                </SafeAreaView>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: Theme.background, fontColor: 'white', }} >

                {this.renderTopBar()}

                <Grid />

                <View >
                    <View pointerEvents={this.props.game.won ? 'none' : 'auto'}>
                        <GamePad
                            navigation={this.props.navigation}
                            winScreen={this.winScreen}
                            outOfAttempts={this.outOfAttempts}
                        />
                    </View>
                    {!this.state.modal && this.props.game.won ?
                        <View style={styles.alreadyWon}>
                            <View style={styles.alreadyWonColumn}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Icon name={'check'} style={[styles.modalIcon, { marginBottom: 0 }]} thin={false} />
                                    <Text style={[styles.text, { maxWidth: '75%', lineHeight: 16 }]}>you've already completed this level!</Text>
                                </View>
                            </View>
                            <View style={styles.alreadyWonColumn}>
                                {this.props.app.lvlList[this.props.app.set].length == this.props.game.lvl ?
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('DifficultySelector')}
                                        style={[styles.nextLvl, { marginTop: 0 }]}
                                    >
                                        <Text style={styles.text}>back to menu</Text>
                                        <Icon name={'arrow-left'} style={[styles.icon, { padding: 8 }]} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={this.nextLvl}
                                        style={[styles.nextLvl, { marginTop: 0 }]}
                                    >
                                        <Text style={styles.text}>next level</Text>
                                        <Icon name={'arrow-right'} style={[styles.icon, { padding: 8 }]} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                        :
                        null
                    }
                </View>

                {this.renderModal()}

                {this.renderAttemptsModal()}

            </SafeAreaView>
        );
    }
}

const upAndDown = {
    0: {
        translateY: 0,
    },
    0.5: {
        translateY: 10,
    },
    1: {
        translateY: 0
    }
};

const styles = StyleSheet.create({
    text: {
        fontFamily: Theme.font,
        color: Theme.text,
        fontSize: 15,
        textAlign: 'center'
    },
    icon: {
        color: Theme.text,
        fontSize: 28,
    },
    helpIcon: {
        fontSize: 32,
    },
    button: {
        padding: 5,
        margin: 8,
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        borderWidth: 1,
        backgroundColor: Theme.highlight,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Theme.border,
        borderRadius: 20,
        padding: 50,
        paddingHorizontal: 40,
        width: '80%',
        maxHeight: '50%'
    },

    alreadyWon: {
        position: 'absolute', top: 0, left: 0,
        borderWidth: 1,
        backgroundColor: Theme.highlight,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Theme.border,
        borderRadius: 20,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: '8%'
    },
    alreadyWonColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },

    modalIcon: {
        fontSize: 50,
        color: Theme.check,
        marginBottom: 10
    },
    modalIconSad: {
        color: Theme.sad,
        marginBottom: 20,
        fontSize: 40,
    },
    nextLvl: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderColor: Theme.border,
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
    },
    moreAttemptsText: {
        fontFamily: Theme.font,
        fontSize: 14,
        color: Theme.text,
        opacity: 0.75,
        textAlign: 'center',
        marginTop: 25,
    }
})

const MapStateToProps = ({ game, app }) => ({ game, app })

export default connect(MapStateToProps, { saveGame, setLvl, moreAttempts, disableHelpArrow })(MainGame);