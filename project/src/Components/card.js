import React from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

const CardExample = props => {
  return (
    <MDBCol style={{ width: "33%", display: "inline-block" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={props.src} waves />

        <MDBCardBody>
          <MDBCardTitle> {props.children} </MDBCardTitle>

          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>

          <MDBBtn href="#">Fill the form now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
