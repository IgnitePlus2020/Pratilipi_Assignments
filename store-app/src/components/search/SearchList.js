import React from 'react'
import SearchTable from './SearchTable';

function SearchList(props, i) {
    let produceData = props.produceData.map((item) => {
        return <SearchTable key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let dairyData = props.dairyData.map((item) => {
        return <SearchTable key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let bakeryData = props.bakeryData.map((item) => {
        return <SearchTable key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let snacksData = props.snacksData.map((item) => {
        return <SearchTable key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let beveragesData = props.beveragesData.map((item) => {
        return <SearchTable key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    return (
        <div>
            {produceData}
            {dairyData}
            {bakeryData}
            {snacksData}
            {beveragesData}
            <br/><br/><br/>
        </div>
    )
}

export default SearchList;