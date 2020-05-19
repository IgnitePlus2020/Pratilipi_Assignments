import React from 'react'
// import SearchTable from './SearchTable';
import SearchCards from './SearchCards';
import { Row, Col } from "reactstrap";

function SearchList(props, i) {
    let produceData = props.produceData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })

    /* let produceData = props.produceData.map((item) => {
        return <SearchTable key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    }) */
    let dairyData = props.dairyData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let bakeryData = props.bakeryData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let snacksData = props.snacksData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let beveragesData = props.beveragesData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let womenTopsData = props.womenTopsData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let womenBottomsData = props.womenBottomsData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let womenShoesData = props.womenShoesData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let menTopsData = props.menTopsData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let menBottomsData = props.menBottomsData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let menShoesData = props.menShoesData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let livingRoomData = props.livingRoomData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let bedroomData = props.bedroomData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let studyData = props.studyData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let biographyData = props.biographyData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let fictionData = props.fictionData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    let healthData = props.healthData.map((item) => {
        return <SearchCards key={i} item_id={item.item_id} item_name={item.item_name} item_price={item.item_price}/>
    })
    return (
        <div>
            <Row>              
                <Col md={3}>{produceData}</Col>             
                <Col md={3}>{dairyData}</Col>         
                <Col md={3}>{bakeryData}</Col>           
                <Col md={3}>{snacksData}</Col>           
                <Col md={3}>{beveragesData}</Col>
                <Col md={3}>{womenTopsData}</Col>
                <Col md={3}>{womenBottomsData}</Col>
                <Col md={3}>{womenShoesData}</Col>
                <Col md={3}>{menTopsData}</Col>
                <Col md={3}>{menBottomsData}</Col>
                <Col md={3}>{menShoesData}</Col>
                <Col md={3}>{livingRoomData}</Col>
                <Col md={3}>{bedroomData}</Col>
                <Col md={3}>{studyData}</Col>
                <Col md={3}>{fictionData}</Col>
                <Col md={3}>{biographyData}</Col>
                <Col md={3}>{healthData}</Col>
            </Row>
            
            
            
            
            <br/><br/><br/>
        </div>
    )
}

export default SearchList;