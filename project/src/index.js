import React from "react";
import ReactDOM from "react-dom";
import Example from "./Components/Navbar";
import Page1 from "./Components/Hosting";
import Image from "./ressources/image.jpg";
import Shop from "./Components/Shop";
import TestimonialSlider from "./Components/Review";
import "bootstrap/dist/css/bootstrap.min.css";
import { Animation, MDBView } from "mdbreact";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FlippingCardPage from "./Components/card";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Old from "./ressources/old.jpg";
import Contact from "./Components/contact";
import Form from "./form/form";
// import FormPage from "./form";

function App() {
  return (
    <div className="App">
      <Example />
      <br />
      <center>
        <FlippingCardPage src={Image}> Welcome the elderly! </FlippingCardPage>
        <FlippingCardPage src={Old}> Meet a new family! </FlippingCardPage>
      </center>
      <br />
      <TestimonialSlider />
      <br />
      <Form />
      <Contact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
