import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Theme from '../Theme';

import { connect } from 'react-redux';
import { setPos } from '../../actions';

import ExtraDimensions from 'react-native-extra-dimensions-android';

//const Cell = ({x, y, active, color, style, clickable, setPos}) => {
class Cell extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(newProps) {
        return ((newProps.color !== this.props.color) || (newProps.active !== this.props.active))
    }

    onPress = () => {
        if (this.props.y == this.props.game.posY) this.props.setPos(this.props.x, this.props.y)
    }

    render() {
        const { active, color, style, clickable } = this.props;
        return (
            <TouchableOpacity
                onPress={this.onPress}
                activeOpacity={1}
                disabled={!clickable}
                style={[
                    styles.box,
                    active ? { borderColor: Theme.selected, borderWidth: 1.5, } : { borderColor: 'rgba(0, 0, 0, 0)' },
                ]}>
                <View
                    style={[styles.cell,
                    { backgroundColor: Theme.circles[color] },
                    active ? { height: 50, } : {},
                        style,]} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        margin: 4,
        borderWidth: 1,
        borderRadius: 50,
        aspectRatio: 1,
    },
    cell: {
        borderRadius: 50,
        borderWidth: 1,
        aspectRatio: 1,
        height: 48,
        margin: 1,
        borderColor: Theme.border,
    }
})

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps, { setPos })(Cell);