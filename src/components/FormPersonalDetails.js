import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar/AppBar';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import TextField from 'material-ui/TextField/TextField';

export class FormPersonalDetails extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter Personal Details" />
                    <div style={{marginLeft: '20px'}}>
                    <TextField 
                        hintText="Occupation"
                        floatingLabelText="Enter Your Occupation"
                        defaultValue = {values.occupation}
                        onChange = {handleChange('occupation')}
                    />
                    <br />
                    <TextField 
                        hintText="City"
                        floatingLabelText="Enter Your City Name"
                        defaultValue = {values.city}
                    />
                    <br/>
                    <TextField 
                        hintText="Bio"
                        floatingLabelText = "Enter Your Bio"
                        defaultValue = {values.bio}
                    />
                    <br />
                    <RaisedButton 
                        label="continue"
                        style={styles.button}
                        primary={true}
                        onClick={this.continue}
                    />

                    <RaisedButton 
                        label="back"
                        style={styles.button}
                        primary={false}
                        onClick={this.back}
                    />
                    </div>
                    
                </>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails