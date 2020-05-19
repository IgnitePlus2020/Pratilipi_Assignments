import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../pages/Order.css';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            {/* <AppBar title="Enter User Details" /> */}
            
            <center><br/><h3 style={{color: "#282c34" }}>Enter User Details</h3>
            
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              style={{width: 500}}
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              id="standard-required"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              style={{width: 500}}
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              style={{width: 500}}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            </center>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;