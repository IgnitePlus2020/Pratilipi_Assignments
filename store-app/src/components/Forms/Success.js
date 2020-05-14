import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
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
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            {/* <AppBar title="Success" /> */}
            <center>
            <h2 style={{fontFamily:'Helvetica Neue', fontWeight: 300}}>Successful!</h2>
            <br/>
            <h4 style={{fontFamily:'Helvetica Neue',  fontWeight: 300}}>Thank You For Your Submission</h4>
            <p style={{fontFamily:'Helvetica Neue', fontWeight: 300}}>For further details check your email</p>
            </center>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;