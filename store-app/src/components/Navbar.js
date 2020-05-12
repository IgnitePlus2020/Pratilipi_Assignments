import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import DropdownItem from "react-bootstrap/DropdownItem";


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand text-white" to="#">
            StoreEva
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            ria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="far fa-life-ring" style={{ color: "#fff" }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link className="nav-link text-white ml-5" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to="/Order">
                  Order
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="Secondary text-white ml-5"
                    id="dropdown-basic"
                  >
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <DropdownButton
                      key={"right"}
                      drop={"right"}
                      variant="text-dark bg-white ml-3 border-white"
                      title={`Grocery`}
                    >
                      <DropdownItem eventKey="1">
                      <Link
                        className="nav-link text-dark"
                        to="/produce"
                       
                      >
                        Produce
                      </Link></DropdownItem>
                      <Dropdown.Divider />
                     <DropdownItem  eventKey="2"> 
                     <Link
                        className="nav-link text-dark"                      
                        to="/dairy"
                      >
                        Dairy
                      </Link></DropdownItem>
                      <Dropdown.Divider />
                      
                      <DropdownItem eventKey="3">
                      <Link
                        className="nav-link text-dark"
                        to="/bakery_and_cereal"
                      >
                        Bakery & Cereals
                      </Link></DropdownItem>
                      <Dropdown.Divider />
                      <DropdownItem eventKey="4">
                      <Link
                        className="nav-link text-dark"
                        to="/snacks"
                      >
                        Snacks
                      </Link></DropdownItem>
                      <Dropdown.Divider />
                      <DropdownItem  eventKey="5">
                      <Link
                        className="nav-link text-dark"

                        to="/beverages"
                      >
                        Beverages
                      </Link></DropdownItem>
                    </DropdownButton>
                    <Dropdown.Divider />

                    <DropdownButton
                      key={"right"}
                      drop={"right"}
                      variant="text-dark bg-white ml-3 border-white"
                      title={`Women's Clothing`}
                    >
                      <Dropdown.Item eventKey="">
                      <Link
                        className="nav-link text-dark"
                        to="/Women_Tops"
                      >Tops
                      </Link></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2">
                      <Link
                        className="nav-link text-dark"
                        to="/Women_Bottoms"
                      >Bottoms
                      </Link></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3">
                      <Link
                        className="nav-link text-dark"
                        to="/Women_Shoes"
                      >Shoes
                      </Link></Dropdown.Item>
                    </DropdownButton>
                    <Dropdown.Divider />

                    <DropdownButton
                      key={"right"}
                      drop={"right"}
                      variant="text-dark bg-white ml-3 border-white"
                      title={`Men's Clothing`}
                    >
                      <Dropdown.Item eventKey="1">
                      <Link
                        className="nav-link text-dark"
                        to="/Men_Tops"
                      >Tops
                      </Link></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2">
                      <Link
                        className="nav-link text-dark"
                        to="/Men_Bottoms"
                      >Bottoms
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3">
                      <Link
                        className="nav-link text-dark"
                        to="/Men_Shoes"
                      >Shoes
                      </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                    <Dropdown.Divider />

                    <DropdownButton
                      key={"right"}
                      drop={"right"}
                      variant="text-dark bg-white ml-3 border-white"
                      title={`Furniture`}
                    >
                      <Dropdown.Item eventKey="1">
                      <Link
                        className="nav-link text-dark"
                        to="/Living_Room"
                      >Living Room
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2">
                      <Link
                        className="nav-link text-dark"
                        to="/Bedroom"
                      >Bedroom
                      </Link></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3">
                      <Link
                        className="nav-link text-dark"
                        to="/Study"
                      >Study
                      </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                    <Dropdown.Divider />

                    <DropdownButton
                      key={"right"}
                      drop={"right"}
                      variant="text-dark bg-white ml-3 border-white"
                      title={`Books`}
                    >
                      <Dropdown.Item eventKey="1">
                      <Link
                        className="nav-link text-dark"
                        to="/Biography"
                      >Biography
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2">
                      <Link
                        className="nav-link text-dark"
                        to="/Fiction"
                      >Fiction
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3">
                      <Link
                        className="nav-link text-dark"
                        to="/Health_And_Fitness"
                      >Health_And_Fitness
                      </Link>
                      </Dropdown.Item>
                    </DropdownButton>

                    {/* <DropdownButton   
                    key={'right'}
                    id={`dropdown-button-drop-${'right'}`}
                    drop={'right'}
                    variant="text-dark bg-white ml-3 border-white"
                    title={`Electronics`}
                  >
                  <Dropdown.Item eventKey="1">Cell Phones</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">Laptops</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="3">TVs & Home Theatre</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Cameras</Dropdown.Item>
                  </DropdownButton> */}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to="/SearchHome">
                  Search
                </Link>
              </li>
            </ul>
            <div className="ml-5"></div> <div className="ml-5"></div>
            <div className="ml-5"></div> <div className="ml-5"></div>
            <div className="ml-5"></div> <div className="ml-5"></div>
            {/* <form className="form-inline my-2 my-lg-0 ">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
