import React from "react";
import search from "../../assets/search.png";

function SearchBox(props) {
  return (
    <div>
      {/* <input onChange={props.handleInput} type="text" style={{ height: 40, width: 300}}/> */}
      <img src={search}  alt="logo" style={{height:35, width:35}}/> 
      <input
        onChange={props.handleInput}
        className="mr-2"
        style={{ width: 400, height: 40 }}
        type="search"
        placeholder="Search"
        aria-label="Search"   
      />
      
      <hr/>
      <br/>
      
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
