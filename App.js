import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './src/components/Main';
import MainGame from './src/components/game/MainGame';
import LevelSelector from './src/components/LevelSelector';
import DifficultySelector from './src/components/DifficultySelector';
import Options from './src/components/Options';

import Theme from './src/components/Theme';

import getSlideFromRightTransition from './src/components/react-navigation-slide-from-right-transition';

const MainStack = createStackNavigator(
  {
    Home: {
      //screen: LevelSelector,
      screen: Main,
    },
    DifficultySelector: {
      screen: DifficultySelector,
    },
    LevelSelector: {
      screen: LevelSelector
    },
    Game: {
      screen: MainGame,
    },
    Options: {
      screen: Options
    }
  },
  {
    transitionConfig: getSlideFromRightTransition,
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(MainStack);

export default class AppComponent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: Theme.background, flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    )
  }
}