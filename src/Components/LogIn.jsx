import React, { Component } from "react";
import { Form, Button, Image, Container } from "react-bootstrap";
import Logo from "../Images/DareMe_Logo.png";
import "./css/LogIn.css";

export class LogIn extends Component {
  render() {
    return (
      <Container>
        <Image src={Logo} fluid />

        <Form className="loginForm">
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button variant="primary">Sign Up</Button>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Container>
    );
  }
}

export default LogIn;
