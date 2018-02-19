import React, { Component } from 'react';
import { Privider, Provider } from 'react-redux';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

