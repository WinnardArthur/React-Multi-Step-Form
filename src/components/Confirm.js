import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import { List, ListItem } from 'material-ui/List'

export class Confirm extends React.Component {
    
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values } = this.props
        return (
            <MuiThemeProvider>
                <AppBar title="Confirm"/>
                <List>
                    <ListItem 
                        primaryText="First Name"
                        secondaryText={values.firstName}
                    />
                    <ListItem 
                        primaryText="Last Name"
                        secondaryText={values.lastName}
                    />
                    <ListItem 
                        primaryText="Email"
                        secondaryText={values.email}
                    />
                    <ListItem 
                        primaryText="Occupation"
                        secondaryText={values.occupation}
                    />
                    <ListItem 
                        primaryText="City"
                        secondaryText={values.city}
                    />
                    <ListItem 
                        primaryText="Biography"
                        secondaryText={values.bio}
                    />
                </List>
                <RaisedButton 
                    label="Submit"
                    primary={true}
                    style={{margin: 30}}
                    onClick = {this.continue}
                />
                <RaisedButton 
                    label="back"
                    onClick={this.back}
                />
            </MuiThemeProvider>
        )
    }
}

export default Confirm