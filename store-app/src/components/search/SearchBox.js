import React from "react";

function SearchBox(props) {
  return (
    <div>
      {/* <input onChange={props.handleInput} type="text" style={{ height: 40, width: 300}}/> */}
      <input
        onChange={props.handleInput}
        className="mr-2"
        style={{ width: 300, height: 40 }}
        type="search"
        placeholder="Grocery"
        aria-label="Search"
      />
      <hr/>
      {/* <button
                className="btn btn-info my-2 my-sm-0"
                type="submit"
                onClick={props.handleInput}
              >
                Search
              </button> */}
  
             {/*  <center>
                <h2>Grocery</h2>
              <div className="dropdown-divider"style={{ width: 800}}></div>
              </center> */}
    </div>
  );
}
export default SearchBox;
