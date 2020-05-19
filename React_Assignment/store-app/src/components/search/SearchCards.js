import React from "react";
import {
  Card,
  /* CardImg,
  CardText, */
  CardBody,
  CardTitle,
  CardSubtitle,
  //   Button,
  // Row,
  // Col,
} from "reactstrap";

function SearchCards(props) {
  return (
    <div>
      {/* <Row>
        <Col md={3}> */}
          <Card>
            {/* <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              /> */}
            <CardBody>
              <CardTitle>{props.item_name}</CardTitle>
              <CardSubtitle
                style={{
                  borderColor: "#3DD4A2",
                  backgroundColor: "#3DD4A2",
                  width: 60,
                  paddingTop:4,
                  height: 35,
                  borderRadius: "5px",
                  color: "#282c34"
                }}
              >
                {props.item_price}
              </CardSubtitle>
              {/* <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText> */}
              {/* <Button>Buy Now</Button> */}
            </CardBody>
          </Card>
        {/* </Col>
      </Row> */}
      <br />
    </div>
  );
}

export default SearchCards;
