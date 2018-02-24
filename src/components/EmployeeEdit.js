import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    edit() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    
    // delete() {

    // }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.edit.bind(this)}>
                        Save 
                    </Button>
                </CardSection>
                {/* <CardSection>
                    <Button onPress={this.delete.bind(this)}>
                        Delete 
                    </Button>
                </CardSection> */}
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave
 })(EmployeeEdit);
