import React, {Component } from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';

class App extends  Component {

    componentDidMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyB9WLwVHAgbRCEW4sOtdLhrskuqJ9WYFXU',
            authDomain: 'managerapp-c6eff.firebaseapp.com',
            databaseURL: 'https://managerapp-c6eff.firebaseio.com',
            projectId: 'managerapp-c6eff',
            storageBucket: 'managerapp-c6eff.appspot.com',
            messagingSenderId: '246309117043',
            appId: '1:246309117043:web:6a810eb486029ac94b9e06'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        
    }
    render() {
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>hello!</Text>
                </View>
            </Provider>
        )
    }
}

export default App;