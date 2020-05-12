import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, contact, address, cardNumber, cvv, expiryDate }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            {/* <AppBar title="Confirm User Data" /> */}
           <center><br/> <h3 style={{color: "#282c34" }}>Confirm User Data</h3>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact" secondary={contact} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Card Number" secondary={cardNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="CVV" secondary={cvv} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Expiry Date" secondary={expiryDate} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            <vr />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
            </center>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;