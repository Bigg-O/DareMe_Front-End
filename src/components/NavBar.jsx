import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from 'react-bootstrap/Nav'

export class NavBar extends Component {
  render() {
    const { wallet, username } = this.props.user;
    return (
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand className="title" href="#home">
          DareMe
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary">
            Money: <Badge variant="light"> ${wallet}</Badge>
          </Button>
          <Navbar.Text>
            Signed in as: <a href="#login">{username}</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Nav.Link href="#new_dare">
          <Button className="dare_button" variant="secondary">
            Add a Dare!
          </Button>
        </Nav.Link>
      </Navbar>
    );
  }
}

export default NavBar;
