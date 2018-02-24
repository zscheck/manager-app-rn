import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Button, Card, CardSection, Confirm } from './common';
import { 
    employeeUpdate, employeeSave, employeeDelete
 } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModel: false };

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    
    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    edit() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    
    text() {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.edit.bind(this)}>
                        Save 
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.text.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                      onPress={() => this.setState({ showModel: !this.state.showModel })}
                    >
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                  visible={this.state.showModel}
                  onAccept={this.onAccept.bind(this)}
                  onDecline={() => this.setState({ showModel: false })}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave, employeeDelete
 })(EmployeeEdit);
