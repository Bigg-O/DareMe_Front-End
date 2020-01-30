import React, { Component } from "react";
import { Form, Button, Image, Container } from "react-bootstrap";
import Logo from "../Images/DareMe_Logo.png";
import "./css/LogIn.css";
import { Link } from "react-router-dom";

export class LogIn extends Component {
  render() {
    return (
      <Container className="login-container">
        <Image className="login-logo" src={Logo} fluid />

        <Form className="loginForm">
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button className="log-in" variant="primary" type="submit">
            Log In
          </Button>
        </Form>

        <p className="sign-up">
          Sign up for free!{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </Container>
    );
  }
}

export default LogIn;
