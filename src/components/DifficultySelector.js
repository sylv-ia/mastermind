import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-feather1s';

import Theme from './Theme';

const DifficultySelector = (props) => {
    //console.log('complete?', props.app.completeness);
    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { props.navigation.goBack() }}
                >
                    <Icon name={'arrow-left'} style={styles.backIcon} />
                </TouchableOpacity>
                </View>
            {['normal', 'normal2', 'normal3', 'normal4', 'normal5'].map((x, i) => {
                //console.log(x);
                return (
                    <TouchableOpacity
                        key={i}
                        style={styles.button}
                        onPress={() => props.navigation.navigate('LevelSelector', { set: x })}
                    >
                        <Text style={[styles.text, styles.setTitle]}>
                            Set {i + 1}
                        </Text>
                        <Text style={styles.text}>
                            {props.app.completeness[x]}%
                        </Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.background,
    },
    text: {
        fontFamily: Theme.font,
        color: Theme.text,
        fontSize: 18,
    },
    setTitle: {
        fontSize: 22,
    },
    button: {
        padding: 5,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
    },
    topBarContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 5,
        width: '100%',
        backgroundColor: Theme.background,
        position: 'absolute',
        top: 0
    },
    backIcon: {
        color: Theme.text,
        fontSize: 28,
    },
});

const mapStateToProps = ({ app }) => ({ app });

export default connect(mapStateToProps, null)(DifficultySelector);
