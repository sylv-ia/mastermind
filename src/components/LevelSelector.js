import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { setLvl, setPageIndex, setSet } from '../actions';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-feather1s';

import Theme from './Theme';

class LevelSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0
        }

        //console.log('LevelSelector');

        this.width = Dimensions.get('window').width;

        this.perPage = 25;

        this.set = this.props.navigation.getParam('set', null);
        this.props.setSet(this.set);

        //console.log('set', this.set);
        //console.log(this.props.app.lvlList[this.set]);

        this.numButtons = this.props.app.lvlList[this.set].length;
        this.numPages = Math.ceil(this.numButtons / this.perPage);

        this.pages = new Array(this.numPages).fill('');
        this.buttons = new Array(this.numButtons).fill('');
        this.lvlLetters = new Array(this.numButtons).fill('');

        this.data = new Array(this.numPages).fill('');


    }

    componentDidMount() {
        ////console.log(this.props.navigation);
    }

    openGameLevel = (lvl) => {
        if (isNaN(lvl)) return;
        const { app } = this.props;
        this.props.setLvl(lvl, app.lvlData[this.set][lvl]);
        this.props.navigation.navigate('Game')
    }

    renderLvlButtonIcon = (x) => {
        switch (x) {
            case 'c':
                return (
                    <Icon name={'check'}
                        style={[styles.buttonIcon, { color: 'green' }]}
                        thin={false}
                    />
                )
            case 'p':
                return (
                    <Icon name={'check'}
                        style={[styles.buttonIcon, { opacity: 0 }]}
                        thin={false}
                    />
                )
            default:
                return (
                    <Icon name={'check'}
                        style={[styles.buttonIcon, { opacity: 0 }]}
                        thin={false}
                    />
                )

        }
    }

    renderLevelButtons = ({ index }) => {
        //let pageMemo = this.pages[index]

        const perPage = this.perPage;
        let offset = index * perPage;
        let lowestLvl = offset + 1;
        let highestLvl = Math.min(offset + perPage, this.numButtons);

        //if (pageMemo != '') return pageMemo

        const { lvlList } = this.props.app;

        ////console.log('renderLvlButtons');



        let page = (
            <View style={styles.cardContainer}>
                <Text style={styles.titleText}>levels {lowestLvl} to {highestLvl}</Text>
                <View style={styles.card}>
                    {lvlList[this.set].slice(offset, offset + perPage).map((x, i) => {
                        let lvl = i + 1 + offset;
                        let memo = this.lvlLetters[lvl];

                        if (memo == x) return this.buttons[lvl];
                        let button = (
                            <View key={lvl}
                                style={styles.buttonWrapper}>
                                <TouchableOpacity
                                    style={[styles.lvlbutton, x == 'p' ? { borderWidth: 3 } : {}]}
                                    onPress={() => this.openGameLevel(lvl)}>
                                    <Text style={styles.buttonText}>
                                        {lvl}
                                    </Text>
                                    {this.renderLvlButtonIcon(x)}

                                </TouchableOpacity>
                            </View>)
                        this.buttons[lvl] = button;
                        this.lvlLetters[lvl] = x;
                        return button;
                    })}
                </View>
            </View>
        )

        this.pages[index] = page;
        return page;


    }

    render() {
        ////console.log('render lvl selector');
        this.lastLvlData = Object.assign({}, this.props.app.lvlData);
        this._carousel ? this._carousel.snapToNext() : 0

        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.topBarContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Icon name={'arrow-left'} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={this.data}
                        firstItem={this.props.app.pageIndex[this.set]}
                        renderItem={this.renderLevelButtons}
                        sliderWidth={this.width}
                        itemWidth={this.width * 0.8}
                        layout={'default'}
                        removeClippedSubviews={false}
                        initialNumToRender={this.props.app.pageIndex[this.set] + 2}
                        maxToRenderPerBatch={3}
                        shouldOptimizeUpdates={false}
                        swipeThreshold={10}
                        activeAnimationType={'spring'}
                        inactiveSlideScale={0.98}
                        windowSize={10}
                        onBeforeSnapToItem={(index) => this.props.setPageIndex(this.set, index)}
                    //overScrollMode={'never'}
                    />
                </View
                
                >
                <Pagination
                    dotsLength={this.numPages}
                    activeDotIndex={this.props.app.pageIndex[this.set]}
                    dotStyle={{ backgroundColor: 'white' }}
                    dotContainerStyle={{ width: 0 }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
    },
    topBarContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 5,
        width: '100%',
        backgroundColor: Theme.background,
    },
    carouselContainer: {
        flex: 1
    },
    cardContainer: {
        marginHorizontal: 10,
        marginTop: '15%',
    },
    card: {
        borderRadius: 10,
        //borderColor: Theme.border,
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
    },
    setText: {
        color: Theme.text,
        fontFamily: Theme.font,
        textAlign: 'center',
    }
})

const mapStateToProps = ({ app }) => ({ app });

export default connect(mapStateToProps, { setLvl, setPageIndex, setSet })(LevelSelector);