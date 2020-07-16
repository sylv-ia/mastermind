import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import AsyncStorage from '@react-native-community/async-storage';

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import changeNavigationBarColor from 'react-native-navigation-bar-color';

changeNavigationBarColor('#000000', false, false);

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

//AsyncStorage.clear()

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

const AppContainer = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppContainer);
