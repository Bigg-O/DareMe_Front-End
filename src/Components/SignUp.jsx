import React, { Component } from "react";
import "./css/SignUp.css";
import Logo from "../Images/DareMe_Logo.png";
import {
  Form,
  Button,
  Col,
  InputGroup,
  Container,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";

export class SignUp extends Component {
  render() {
    return (
      <Container className="signup-container">
        <Image className="login-logo" src={Logo} fluid />

        <h1 className="signup-desc">Create an Account!</h1>

        <Form noValidate>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formPassword2">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password Confirmation"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formAbout">
              <Form.Label>About</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Who am I?" />
            </Form.Group>
          </Form.Row>

          <Button className="create-button" type="submit">
            Create an Account!
          </Button>
        </Form>

        <p className="b2-login">
          Actually I have an account, back to{" "}
          <Link className="login-link" to="/">
            Log-in
          </Link>
        </p>
      </Container>
    );
  }
}

export default SignUp;
