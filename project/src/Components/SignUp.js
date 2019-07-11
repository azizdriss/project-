import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import SignupIcon from "@material-ui/icons/AccountCircleOutlined";
import SinupIcon from "@material-ui/icons/EmailOutlined";
import SnupIcon from "@material-ui/icons/DoneAllOutlined";
import NupIcon from "@material-ui/icons/Lock";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./firebase";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    console.log("onFormSubmit", e);
    console.log("this.state", this.state);
    e.preventDefault();
    firebase
      .database()
      .ref("account")
      .push() // id
      .set({
        account: this.state
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <MDBContainer>
            <MDBRow>
              <div className="col-md-4 offset-4">
                <form onSubmit={this.onFormSubmit}>
                  <p className="h2 text-center mb-4">Sign Up</p>
                  <div className="grey-text">
                    <SignupIcon />
                    <MDBInput
                      label="Your name"
                      onChange={e => this.handleChange(e)}
                      type="text"
                      name="name"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <SinupIcon />
                    <MDBInput
                      label="Your email"
                      onChange={e => this.handleChange(e)}
                      type="email"
                      name="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <SnupIcon />
                    <MDBInput
                      label="Confirm your email"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <NupIcon />
                    <MDBInput
                      label="Your password"
                      onChange={e => this.handleChange(e)}
                      name="password"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit">Register</MDBBtn>
                  </div>
                </form>
              </div>
            </MDBRow>
          </MDBContainer>
        </center>
      </div>
    );
  }
}
