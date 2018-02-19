import React, { Component } from 'react';
import { Privider, Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';
import LoginForm from './components/LoginForm'

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCvHTyvZqIzPoBBTq1ThDQXriqNTO7VlpQ',
            authDomain: 'manager-49905.firebaseapp.com',
            databaseURL: 'https://manager-49905.firebaseio.com',
            projectId: 'manager-49905',
            storageBucket: '',
            messagingSenderId: '549386936734'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={ store }>
                <Router />
            </Provider>
        );
    }
}

