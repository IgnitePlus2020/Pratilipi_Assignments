import React, { Component } from 'react';
import SearchList from './SearchList';
import SearchBox from './SearchBox';
import '../../App.css';
import Grocery from '../../data/Grocery.json';


class SearchHome extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          produce: Grocery.produce,
          dairy: Grocery.dairy,
          bakery: Grocery.bakery_and_cereals,
          snacks: Grocery.snacks,
          beverages: Grocery.beverages,
          searchData: ''
        };
      }
      handleInput = (e) => {
        this.setState({ searchData: e.target.value })
      }

    render() {
        let produceData = this.state.produce.filter((item) => {
            return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
         let dairyData = this.state.dairy.filter((item) => {
            return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let bakeryData = this.state.bakery.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
      })
      let snacksData = this.state.snacks.filter((item) => {
        return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
    })
    let beveragesData = this.state.beverages.filter((item) => {
      return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
  })

        return (
            <div className="App">
                <br/>
                <SearchBox handleInput={this.handleInput}/>
                <SearchList produceData={produceData} dairyData={dairyData} 
                            bakeryData={bakeryData} snacksData={snacksData} 
                            beveragesData={beveragesData}
                            />

                
            </div>
        );
    }
}

export default SearchHome;