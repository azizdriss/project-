import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import SigninIcon from "@material-ui/icons/Lock";
import SininIcon from "@material-ui/icons/EmailOutlined";
const SignIn = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <div className="col-md-4 offset-4">
            <form>
              <h2 className="h2 text-center mb-4">Sign in</h2>
              <div className="grey-text">
                <SininIcon />
                <MDBInput
                  label="Type your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <SigninIcon />
                <MDBInput
                  label="Type your password"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignIn;
