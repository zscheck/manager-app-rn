import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';

class LoginForm extends Component {
    emailChange(text) {
        this.props.emailChanged(text);
    }

    passwordChange(text) {
        this.props.passwordChanged(text);
    }

    submitLogin() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error.length > 1) {
            console.log(this.props.error);
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
        <Button onPress={this.submitLogin.bind(this)}>
            Log In
        </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                      label='Email'
                      placeholder='email@gmail.com'
                      onChangeText={this.emailChange.bind(this)}
                      value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                <Input
                  secureTextEntry
                  label='Password'
                  placeholder='xxxxxxxx'
                  onChangeText={this.passwordChange.bind(this)}
                  value={this.props.password}
                />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = state => ({
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    });

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
    })(LoginForm);
