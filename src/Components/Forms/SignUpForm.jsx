import React, { Component } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import "../css/SignUpForm.css";

export class SignUpForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formPassword2">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password Confirmation"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Who am I?"
            />
          </Form.Group>
        </Form.Row>

        <Button className="create-button" type="submit">
          Create an Account!
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
