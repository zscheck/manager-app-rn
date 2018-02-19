import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import {
    emailChanged,
    passwordChanged
} from '../actions';

class LoginForm extends Component {
    emailChange(text) {
        this.props.emailChanged(text);
    }

    passwordChange(text) {
        this.props.passwordChanged(text);
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

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
        email: state.auth.email,
        password: state.auth.password
    });

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
