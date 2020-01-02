import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    const { wallet, username } = this.props.user;
    return (
      <Navbar bg="primary" variant="dark" fixed="top">
        <Link to="/">
          <Navbar.Brand className="title">DareMe</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary">
            Money: <Badge variant="light"> ${wallet}</Badge>
          </Button>
          <Navbar.Text>
            Signed in as: {username}
          </Navbar.Text>
        </Navbar.Collapse>
        <Nav.Link>
          <Link to="/new_dare">
            <Button className="dare_button" variant="secondary">
              Add a Dare!
            </Button>
          </Link>
        </Nav.Link>
      </Navbar>
    );
  }
}

export default NavBar;
