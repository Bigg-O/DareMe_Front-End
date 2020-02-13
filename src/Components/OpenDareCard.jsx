import React, { Component } from "react";
import OpenDareCardPay from "./OpenDareCardPay";
import Card from "react-bootstrap/Card";
import "./css/OpenDareCard.css";
import axios from "axios";

export class DareCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    const { user_id } = this.props.dare;
    axios
      .get(`http://localhost:3000/users/${user_id}`)
      .then(resp => {
        this.setState({ user: resp.data });
      })
      .catch(err => console.log(err));
  }

  handlePayment = (_id, selected_amount) => {
    const wallet = localStorage.getItem("wallet");
    const jwt = localStorage.getItem("JWT");
    const dare_id = _id;
    const currentUserID = localStorage.getItem("_id");

    const { wanted_profit, total_amount, bidders } = this.props.dare;
    bidders.push({
      bidder_id: currentUserID,
      amount: selected_amount,
      date: Date.now()
    });

    if (wallet < selected_amount) {
      alert("Insufficient money, you're broke");
    } else if (wanted_profit >= total_amount + selected_amount) {
      // PATCH request for DARE UPDATE
      fetch(`http://localhost:3000/dares/${dare_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({
          total_amount: total_amount + selected_amount,
          bidders: bidders
        })
      })
        .then(promise => promise.json())
        .then(resp => {
          console.log(resp);
          this.props.onDareDataLoad()
        })
        .catch(err => console.log(err));

      // PATCH request for USER WALLET UPDATE
    } else {
      alert("Don't over pay!");
    }
  };

  render() {
    const { username } = this.state.user;
    const {
      open_title,
      open_description,
      open_pic,
      open_posting_date
    } = this.props.dare;
    return (
      <Card>
        <Card.Header as="h5">@{username}</Card.Header>

        <Card.Img variant="top" src={open_pic} />

        <Card.Body>
          <Card.Title>{open_title}</Card.Title>
          <Card.Text>{open_description}</Card.Text>
          <OpenDareCardPay
            dare={this.props.dare}
            user={this.state.user}
            onPay={this.handlePayment}
          />
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">Posted on {open_posting_date}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default DareCard;
