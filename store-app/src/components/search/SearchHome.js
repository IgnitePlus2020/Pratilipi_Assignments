import React, { Component } from 'react';
import SearchList from './SearchList';
import SearchBox from './SearchBox';
import '../../App.css';
import Grocery from '../../data/Grocery.json';
import WomensClothing from '../../data/WomensClothing.json';
import MensClothing from '../../data/MensClothing.json';
import Furniture from '../../data/Furniture.json';
import Books from '../../data/Books.json';


class SearchHome extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          produce: Grocery.produce,
          dairy: Grocery.dairy,
          bakery: Grocery.bakery_and_cereals,
          snacks: Grocery.snacks,
          beverages: Grocery.beverages,
          womenTops: WomensClothing.tops,
          womenBottoms: WomensClothing.bottoms,
          womenShoes: WomensClothing.shoes,
          menTops: MensClothing.tops,
          menBottoms: MensClothing.bottoms,
          menShoes: MensClothing.shoes,
          livingRoom: Furniture.living_room,
          bedroom: Furniture.bedroom,
          study: Furniture.study,
          biography: Books.biograpphy,
          fiction: Books.fiction,
          health: Books.health_and_fitness,
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
        let womenTopsData = this.state.womenTops.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let womenBottomsData = this.state.womenBottoms.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let womenShoesData = this.state.womenShoes.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let menTopsData = this.state.menTops.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let menBottomsData = this.state.menBottoms.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let menShoesData = this.state.menShoes.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let livingRoomData = this.state.livingRoom.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let bedroomData = this.state.bedroom.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let studyData = this.state.study.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let biographyData = this.state.biography.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let fictionData = this.state.fiction.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })
        let healthData = this.state.health.filter((item) => {
          return item.item_name.toLowerCase().includes(this.state.searchData.toLowerCase())
        })

        return (
            <div align="center" >
                <br/>
                <h5 style={{fontFamily:'Sans-serif', fontWeight: 500, color: "#636566"}}>WELCOME!</h5>
                {/* <h4 style={{fontFamily:'Sans-serif', fontWeight: 500, color: "#636566"}}>Stop Denying, Start Buying...</h4> */}
              
                <SearchBox handleInput={this.handleInput}/>
                <SearchList produceData={produceData} dairyData={dairyData} 
                            bakeryData={bakeryData} snacksData={snacksData} 
                            beveragesData={beveragesData} 
                            womenTopsData={womenTopsData} womenBottomsData={womenBottomsData}
                            womenShoesData={womenShoesData} menTopsData={menTopsData}
                            menBottomsData={menBottomsData} menShoesData={menShoesData}
                            livingRoomData={livingRoomData} bedroomData={bedroomData}
                            studyData={studyData} biographyData={biographyData}
                            fictionData={fictionData} healthData={healthData}
                            />

                
            </div>
        );
    }
}

export default SearchHome;