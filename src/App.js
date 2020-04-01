import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

// import * as firebase from 'firebase';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {

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
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
          }
          
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;