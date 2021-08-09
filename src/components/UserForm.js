import React, { Component } from 'react';
import Confirm  from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';


export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev State
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change...
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
 
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        switch(step) { 
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
            case 3:
                return <Confirm 
                        values={values}
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        />
            case 4:
                return <h1>Success</h1>
        }

    }
}



export default UserForm