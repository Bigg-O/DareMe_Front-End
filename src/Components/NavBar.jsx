import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Badge, Nav } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    const { wallet, username } = this.props.user;
    return (
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand as={Link} to="/" className="title">
          DareMe
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary">
            Money: <Badge variant="light"> ${wallet}</Badge>
          </Button>
          <Navbar.Text>Signed in as: {username}</Navbar.Text>
        </Navbar.Collapse>
        <Nav.Link as={Link} to="/new_dare">
          <Button className="dare_button" variant="secondary">
            Add a Dare!
          </Button>
        </Nav.Link>
      </Navbar>
    );
  }
}

export default NavBar;
