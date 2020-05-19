import React from "react";

function Search(props) {
  return (
    <center>
      <div
        className="col-md-3"
        style={{
          width: 300,
          border: "solid",
          borderColor: "white",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <p>{props.item_name}</p>
        <p>{props.item_price}</p>
      </div>
      <div className="dropdown-divider" style={{ width: 300 }}></div>
    </center>
  );
}
export default Search;
