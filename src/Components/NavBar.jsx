import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Button, Badge, Nav, Image } from "react-bootstrap";
import Logo from "../Images/DareMe_SM_Logo.png";
import "./css/NavBar.css";

export class NavBar extends Component {
  render() {
    // const { wallet, username } = this.props.user;
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand className="home-logo" as={NavLink} to="/">
          <Image fluid src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mr-auto" />
          <Nav>
            {/* <Button variant="primary">
              Money: <Badge variant="light"> ${wallet}</Badge>
            </Button>
            <Navbar.Text>Signed in as: {username}</Navbar.Text> */}
            <Button className="add-dare" as={NavLink} to="/new_dare">
              Add Dare!
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
