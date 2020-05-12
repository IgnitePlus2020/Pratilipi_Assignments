import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div align="center" style={{ color: "#282c34" }}>
        <br/>
        <h3 style={{fontFamily:'Helvetica Neue', fontWeight: 700}}>WELCOME!</h3>
        <hr />
        <h3 style={{fontFamily:'Sans-serif', fontWeight: 700}}>Stop Denying, Start Buying...</h3>

        <br />
        <br />
        <br />
        <p>Move on to the Category Dropdown and explore the wide range of products</p>
        <p>Go to the Search menu and look for a particular Grocery Item</p>
        <p>Fill out the Order From with your personal and card details </p>
      </div>
    );
  }
}

export default Home;
