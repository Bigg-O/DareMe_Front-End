import React, { Component } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";

export class NewDareForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="7" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control required placeholder="Title" />
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="formPrice">
            <Form.Label>Dare Price</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control required placeholder="dollars" />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formPic">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control required placeholder="http://www......" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="What's the dare??"
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          New Dare!
        </Button>
      </Form>
    );
  }
}

export default NewDareForm;
