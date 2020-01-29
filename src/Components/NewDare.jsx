import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export class NewDare extends Component {
  render() {
    return (
      <Form className="form" >
        <Form.Row>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control required/>
          </Form.Group>
          <Form.Group controlId="url">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control required/>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Dare Price</Form.Label>
            <Form.Control required/>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" required/>
        </Form.Group>
        <Link to = "/">
          <Button variant="primary" type="submit" onClick={() => this.props.onSubmit()}>
            Submit
          </Button>
        </Link>
      </Form>
    );
  }
}

export default NewDare;