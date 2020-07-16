import React, { Component } from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Icon from "react-native-feather1s";

import Theme from './Theme';

//import changeNavigationBarColor from 'react-native-navigation-bar-color';

import * as Animatable from 'react-native-animatable';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficultyVisible: false
        };
    }

    /*
    componentDidMount() {
        //console.log('main mount');
        AppState.addEventListener('focus', this._handleAppStateChange);
    }

    componentWillUnmount() {
        //console.log('main unmount');
        AppState.removeEventListener('focus', this._handleAppStateChange);
    }

    _handleAppStateChange = () => {
        //console.log('nav bar color');
        changeNavigationBarColor('#000000', false, false);  
    };
    */

    render() {
        let { height, width } = Dimensions.get('window');
        let { difficultyVisible } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#000" barStyle="light-content" />

                <Text style={[styles.text, { fontSize: 20 }]}>mastermind</Text>

                <View style={{
                    marginVertical: height * 0.25, alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <View style={{ position: 'absolute' }}>
                        <Animatable.View
                            ref={ref => this.difficulty1 = ref}
                            direction={!difficultyVisible ? 'reverse' : 'normal'}
                            style={difficultyVisible ? styles.difficultyWrapperOpen : styles.difficultyWrapper}>
                            <TouchableOpacity>
                                <Text style={[styles.text, styles.difficulty]}>easy</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View
                            ref={ref => this.difficulty2 = ref}
                            direction={!difficultyVisible ? 'reverse' : 'normal'}
                            style={difficultyVisible ? styles.difficultyWrapperOpen : styles.difficultyWrapper}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('LevelSelector')}
                            >
                                <Text style={[styles.text, styles.difficulty]}>normal</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View
                            ref={ref => this.difficulty3 = ref}
                            direction={!difficultyVisible ? 'reverse' : 'normal'}
                            style={difficultyVisible ? styles.difficultyWrapperOpen : styles.difficultyWrapper}>
                            <TouchableOpacity>
                                <Text style={[styles.text, styles.difficulty]}>hard</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>

                    <Animatable.View
                        ref={ref => this.play = ref}
                        direction={!difficultyVisible ? 'reverse' : 'normal'}
                        style={difficultyVisible ? styles.playButtonOpen : {}}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DifficultySelector')}
                            /*
                            onPress={() => {
                                this.play.animate(playButtonAnimation)
                                this.difficulty1.animate(difficultyButtonAnimation)
                                this.difficulty2.animate(difficultyButtonAnimation)
                                this.difficulty3.animate(difficultyButtonAnimation)
                                this.setState({ difficultyVisible: !this.state.difficultyVisible })
                            }}
                            // */

                            //activeOpacity={1}
                        >
                            <Text style={[styles.text, { fontSize: 36 }]}>play</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                </View>

                <TouchableOpacity style={{ marginVertical: height * 0.025 }}>
                    <Text style={styles.text}> </Text>
                </TouchableOpacity>

                {/*
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Options')}
                >
                    <Text style={styles.text}>options</Text>
                </TouchableOpacity>
                */}

            </SafeAreaView >
        );
    }
}

const playButtonAnimation = {
    0: {
        opacity: 1,
        transform: [
            { translateX: 0 },
        ],
    },
    1: {
        opacity: 0.4,
        transform: [
            { translateX: -Dimensions.get('window').width * 0.16 },
        ],
    }
}

const difficultyButtonAnimation = {
    0: {
        opacity: 0,
        margin: 0,
        transform: [
            { translateX: 0 },
        ],
    },
    0.8: {
        opacity: 0.2,
        margin: 0
    },
    0.9: {
        opacity: 0.4,
        margin: 0,
    },
    1: {
        opacity: 1,
        margin: 7,
        transform: [
            { translateX: Dimensions.get('window').width * 0.16 },
        ],

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Theme.background,
    },
    menuButton: {
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.55)',
        padding: 10,
        flexDirection: 'row',
    },
    menuContentContainer: {
        flexDirection: 'row',
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButonTextContainer: {
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    menuButtonText: {
        fontSize: 28,
    },
    iconContainer: {
        justifyContent: 'center',
    },
    icon: {
        fontSize: 40,
    },
    text: {
        fontFamily: Theme.font,
        color: Theme.text,
        fontSize: 16,
    },
    difficulty: {
        fontSize: 22,
    },
    playButtonOpen: {
        opacity: 0.4,
        transform: [
            { translateX: -Dimensions.get('window').width * 0.16 },
        ],
    },
    difficultyWrapper: {
        opacity: 0
    },
    difficultyWrapperOpen: {
        opacity: 1,
        margin: 7,
        transform: [
            { translateX: Dimensions.get('window').width * 0.16 },
        ],
    },
    card: {
        borderRadius: 10,
        //borderColor: Theme.border,
        borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15,
    },
    buttonWrapper: {
        width: '20%',
        aspectRatio: 3 / 4,
        padding: 5,
    },
    lvlbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        borderColor: Theme.border,
    },
    buttonText: {
        color: Theme.text,
        fontFamily: Theme.font
    },
    backIcon: {
        color: Theme.text,
        fontSize: 28,
    },
    button: {
        padding: 5,
        margin: 8,
    },
    buttonIcon: {
        fontSize: 30,
        color: 'white'
    },
    titleText: {
        color: Theme.text,
        fontFamily: Theme.font,
        textAlign: 'center',
        width: '100%'
    }
})

export default Main;