import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Theme from '../Theme';
import Cell from './Cell';
import IndicatorBox from './IndicatorBox';

import { connect } from 'react-redux';


class Grid extends Component {
    constructor(props) {
        super(props);
    }


    renderRows = () => {

        let cells = [];

        if (this.props.data) {
            const { posX, posY, board, indicators } = this.props.data;

            for (let i = 0; i < board.length; i++) {
                cells.push(
                    <Row
                        key={i}
                        data={board[i]}
                        indicator={indicators[i]}
                        active={i == posY ? posX : null}
                        y={i}
                    />
                )
            }

        } else {

            const { posX, posY, board, indicators } = this.props.game;

            for (let i = 0; i < board.length; i++) {
                cells.push(
                    <Row
                        key={i}
                        data={board[i]}
                        indicator={indicators[i]}
                        active={i == posY ? posX : null}
                        y={i}
                    />
                )
            }

        }

        return cells;
    }

    componentDidMount() {
        setTimeout(() => this.scrollView.scrollToEnd({ animated: false }), 0)
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={{ alignItems: 'center', width: '100%', paddingBottom: 50,  }}
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    this.scrollView.scrollToEnd({ animated: true });
                }}
            //contentOffset={{x: 0, y: 10}}
            >
                {this.renderRows()}
            </ScrollView>
        );
    }

}

export const Row = (props) => {

    renderCells = () => {
        return props.data.map((x, i) =>
            <Cell
                key={i}
                color={x}
                active={i == props.active}
                clickable={true}
                x={i}
                y={props.y}
            />
        )
    }

    return (
        <View style={styles.row}>
            <Text style={{ color: Theme.text, marginLeft: 10, fontFamily: Theme.font }}>{props.y + 1}</Text>
            <View style={{ marginHorizontal: 10 }}>
                <IndicatorBox data={props.indicator} />
            </View>
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
        backgroundColor: Theme.highlight,
        borderRadius: 10,
        height: 63,
        paddingRight: 20,
        marginVertical: 6,
    }
})

const mapStateToProps = ({ game }) => ({ game });

export default connect(mapStateToProps)(Grid);