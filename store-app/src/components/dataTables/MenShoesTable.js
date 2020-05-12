import React, { Component } from "react";
import MensClothing from "../../data/MensClothing.json";

class MensShoesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: MensClothing.shoes,
    };
  }

  render() {
    return (
      <div>
        <br />
        <h1
          style={{
            color: "#282c34",
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
          }}
        >
          Men's Shoes:
        </h1>
        <center>
          <table
            width="1000"
            style={{
              backgroundColor: "white",
              boxShadow: "0px 10px 50px #555",
              borderRadius: "10px",
            }}
          >
            <tr>
              <td>
                <h5
                  className="my-auto"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  Id
                </h5>
              </td>

              <td>
                <h5
                  className="my-auto"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  Name
                </h5>
              </td>

              <td>
                <h5
                  className="my-auto"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  Price
                </h5>
              </td>
            </tr>
            {this.state.myData.map((item) => {
              return (
                <tr>
                  <td>
                    <h6
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                    >
                      <div className="dropdown-divider"></div>
                      {item.item_id}
                    </h6>
                  </td>

                  <td>
                    <h6
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                    >
                      <div className="dropdown-divider"></div>
                      {item.item_name}
                    </h6>
                  </td>

                  <td>
                    <h6
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                    >
                      <div className="dropdown-divider"></div>
                      {item.item_price}
                    </h6>
                  </td>
                </tr>
              );
            })}
          </table>
        </center>
      </div>
    );
  }
}

export default MensShoesTable;
