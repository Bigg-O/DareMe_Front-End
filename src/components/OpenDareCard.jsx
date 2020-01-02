import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import OpenDareCardPay from './OpenDareCardPay'

export class DareCard extends Component {


  render() {
    const {
      username,
      open_title,
      open_description,
      open_pic_url,
    } = this.props.dare;
    return (
      <Card>
        <Card.Header>{username}</Card.Header>

        <Card.Img variant="top" src={open_pic_url} />

        <Card.Body>
          <Card.Title>{open_title}</Card.Title>
          <Card.Text>{open_description}</Card.Text>
          <OpenDareCardPay
            dare={this.props.dare}
            onPay={this.props.onPay}
            />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default DareCard;
