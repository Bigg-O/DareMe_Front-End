import React, { Component } from "react";
import OpenDareCardPay from "./OpenDareCardPay";
import Card from "react-bootstrap/Card";

export class DareCard extends Component {
  render() {
    const {
      username,
      open_title,
      open_description,
      open_pic
    } = this.props.dare;
    return (
      <Card>
        <Card.Header>{username}</Card.Header>

        <Card.Img variant="top" src={open_pic} />

        <Card.Body>
          <Card.Title>{open_title}</Card.Title>
          <Card.Text>{open_description}</Card.Text>
          <OpenDareCardPay dare={this.props.dare} onPay={this.props.onPay} />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Posted {Math.round(Math.random() * 200) + 1} mins ago
          </small>
        </Card.Footer>
      </Card>
    );
  }
}

export default DareCard;
