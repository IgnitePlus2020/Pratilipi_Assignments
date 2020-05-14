import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div  style={{ color: "#282c34ec" }}>
        <br/>
        {/* <h3 style={{fontFamily:'Helvetica Neue', fontWeight: 700}}>StorEva Provides Many</h3> */}
        
        <h3 align="center" style={{fontFamily:'Sans-serif', fontWeight: 700}}>Stop Denying, Start Buying...</h3>
        <hr />
        <br />
        <div className="ml-5" style={{ color: "#282c34" }}>
        <p>Check out:</p>
        <p>1. The Category Dropdown to explore the wide range of products</p>
        <p>2. The Search Box on Home Page to look for a particular product</p>
        <p>3. Fill out the Order From with your personal and card details </p>
        </div>
      </div>
    );
  }
}

export default About;
