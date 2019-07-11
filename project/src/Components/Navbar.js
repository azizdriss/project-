import React from "react";
import Shop from "./Shop";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import signUp from "./signUp";
import { Icon } from "@material-ui/icons";
import SIcon from "@material-ui/icons/SearchOutlined";

import AccountIcon from "@material-ui/icons/AccountBox";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormControl,
  Input,
  Button
} from "reactstrap";
import { width } from "@material-ui/system";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand className="ko" href="/">
              F4F
            </NavbarBrand>
            <Input
              style={{ width: "400px" }}
              type="email"
              name="email"
              className="mr-sm-2"
              placeholder="Search"
            />
            <Form>
              <button type="button" class="btn btn-dark">
                <SIcon />
              </button>
            </Form>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    style={{ marginTop: "5px", marginLeft: "730px" }}
                    href="/components/"
                  >
                    Nos Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/Shop" className="nav-link">
                    <NavLink>Shop</NavLink>
                  </Link>
                </NavItem>

                <UncontrolledDropdown>
                  <NavItem>
                    <DropdownToggle
                      style={{
                        marginTop: "14px",
                        position: "absolute"
                      }}
                      nav
                      caret
                    >
                      <AccountIcon />
                      Account
                    </DropdownToggle>
                  </NavItem>
                  <DropdownMenu right>
                    <Link to="/SignUp" className="nav-link">
                      <DropdownItem>Sign Up</DropdownItem>
                    </Link>
                    <Link to="/SignIn" className="nav-link">
                      <DropdownItem>Sign In</DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Shop" component={Shop} />
          </Switch>
        </div>
      </Router>
    );
  }
}
