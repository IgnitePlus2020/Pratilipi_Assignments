import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormCardDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            {/* <AppBar title="Enter Card Details" /> */}
            <center><br/><h3 style={{color: "#282c34" }}>Enter Card Details</h3>
            
            <TextField
              placeholder="Enter Your Card Number"
              label="Card Number"
              onChange={handleChange('cardNumber')}
              defaultValue={values.cardNumber}
              margin="normal"
              style={{width: 500}}
            />
            <br />
            <TextField
              placeholder="Enter Your CVV"
              label="CVV"
              onChange={handleChange('cvv')}
              defaultValue={values.cvv}
              margin="normal"
              style={{width: 500}}
            />
            <br />
            <TextField
              placeholder="Enter Your Expiry Date (dd-mm-yyyy)"
              label="Expiry Date"
              onChange={handleChange('expiryDate')}
              defaultValue={values.expiryDate}
              margin="normal"
              style={{width: 500}}
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default FormCardDetails;