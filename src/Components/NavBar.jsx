import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Button, Badge, Nav, Image } from "react-bootstrap";
import Logo from "../Images/DareMe_SM_Logo.png";
import "./css/NavBar.css";

export class NavBar extends Component {
  handleLogout = () => {
    const username = localStorage.getItem("username");
    alert(`Logging out ${username}`);
    localStorage.clear();
  };

  render() {
    const username = localStorage.getItem("username");
    const wallet = localStorage.getItem("wallet");
    return (
      <Navbar collapseOnSelect expand="md" variant="dark" fixed="top">
        <Navbar.Brand className="home-logo" as={NavLink} to="/">
          <Image src={Logo} fluid />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mr-auto" />
          <Nav className="nav">
            <Nav.Link as={Link} to="/user_info">
              <Navbar.Text className="navbar-text">
                user: <span className="username">{username}</span>
              </Navbar.Text>
            </Nav.Link>

            <Nav.Link as={Link} to="/login" onClick={this.handleLogout}>
              <Navbar.Text className="navbar-text">logout</Navbar.Text>
            </Nav.Link>

            <Nav.Link as={Link} to="">
              <Navbar.Text className="navbar-text">
                money: <Badge variant="dark"> ${wallet}</Badge>
              </Navbar.Text>
            </Nav.Link>

            <Nav.Link as={Link} to="/new_dare">
              <Button className="add-dare">Add Dare!</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
