import React, { Component } from "react";
import "./Order.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      cardNumber: null,
      expiryDate: null,
      cvv: null,
      contact: null,
      address: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        contact: "",
        address: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showFirstName: true,
      showLastName: true,
      showEmail: true,
      showCardNumber: true,
      showExpiry: true,
      showCVV: true,
      showPhone: true,
      showAddress: true,
    });

    if (formValid(this.state.formErrors)) {
      console.log(`
      ---SUBMITTING---
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Card Number: ${this.state.cardNumber}
      Expiry Date: ${this.state.expiryDate}
      CVV: ${this.state.cvv}
      Contact Number: ${this.state.contact}
      Address: ${this.state.address}
      `);
    } else {
      console.log("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    alert(`
    Form Submitted!
    Scroll down to check form details`);
  };

  handleChange = (e) => {
    e.preventDefault();
    // const key = e.target.name;
    // const val = e.target.value;
    // this.setState({
    //   [key]: val,
    // });

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;

      case "cardNumber":
        formErrors.cardNumber =
          value.length !== 10 ? "Valid 10-digit card number required" : "";
        break;

      case "cvv":
        formErrors.cvv = value.length !== 3 ? "Valid 3-digit cvv required" : "";
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid Email Address";
        break;

      case "contact":
        formErrors.contact =
          value.length !== 10 ? "Valid 10-digit contact number required" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper" style={{ color: "#282c34" }}>
        <div className="form-wrapper">
          <h1>Order Form</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Card Number</label>
              <input
                type="text"
                className={formErrors.cardNumber.length > 0 ? "error" : null}
                placeholder="Card Number"
                name="cardNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.cardNumber.length > 0 && (
                <span className="errorMessage">{formErrors.cardNumber}</span>
              )}
            </div>

            <div className="firstName">
              <label htmlFor="firstName">Expiry Date</label>
              <input
                type="date"
                // className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Expiry Date"
                name="expiryDate"
                noValidate
                onChange={this.handleChange}
              />
              {/*   {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )} */}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">CVV</label>
              <input
                type="text"
                className={formErrors.cvv.length > 0 ? "error" : null}
                placeholder="CVV"
                name="cvv"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.cvv.length > 0 && (
                <span className="errorMessage">{formErrors.cvv}</span>
              )}
            </div>

            <div className="contact">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="text"
                className={formErrors.contact.length > 0 ? "error" : null}
                placeholder="Contact Number"
                name="contact"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.contact.length > 0 && (
                <span className="errorMessage">{formErrors.contact}</span>
              )}
            </div>

            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className=""
                placeholder="Address"
                name="address"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            {/*   
              <div className="payNow">
              <button >Pay Now</button>
            </div> */}

            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div >
        <p style={{ fontFamily: "Segoe UI", fontWeight: 600, color: "#282c34" }}>
            <br/>
          {this.state.showFirstName && <p>FirstName:  {this.state.firstName}</p>}
          {this.state.showLastName && <p>LastName: {this.state.lastName}</p>}
          {this.state.showEmail && <p>Email: {this.state.email}</p>}
          {this.state.showCardNumber && <p>Card Number: {this.state.cardNumber}</p>}
          {this.state.showExpiry && <p>Expiry Date: {this.state.expiryDate}</p>}
          {this.state.showCVV && <p>CVV: {this.state.cvv}</p>}
          {this.state.showPhone && <p>Phone Number: {this.state.contact}</p>}
          {this.state.showAddress && <p>Address: {this.state.address}</p>}
        </p>
        </div>
      </div>
    );
  }
}

export default Order;
