import React, { Component } from "react";
import OpenDareCardPay from "./OpenDareCardPay";
import Card from "react-bootstrap/Card";
import "./css/OpenDareCard.css";
import axios from "axios";
const HEROKU_URL = "https://dareme-server.herokuapp.com";

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
      .get(HEROKU_URL + `/users/${user_id}`)
      .then(resp => this.setState({ user: resp.data }))
      .catch(err => console.log(err));
  }

  handlePayment = (_id, selected_amount) => {
    const { wanted_profit, total_amount, bidders } = this.props.dare;
    const wallet = localStorage.getItem("wallet");
    const jwt = localStorage.getItem("JWT");
    const dare_id = _id;
    const currentUserID = localStorage.getItem("_id");

    if (wallet < selected_amount) {
      alert("Insufficient money, you're broke");
    } else if (wanted_profit >= total_amount + selected_amount) {
      bidders.push({
        bidder_id: currentUserID,
        amount: selected_amount,
        date: Date.now()
      });
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      };
      // PATCH request for DARE UPDATE
      fetch(HEROKU_URL + `/dares/${dare_id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({
          total_amount: total_amount + selected_amount,
          bidders: bidders
        })
      })
        .then(promise => promise.json())
        .then(resp => {
          console.log(resp);
          this.props.onDareDataLoad();
        })
        .catch(err => console.log(err));

      // PATCH request for USER WALLET UPDATE
      fetch(HEROKU_URL + `/users/${currentUserID}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({
          wallet: wallet - selected_amount
        })
      })
        .then(promise => promise.json())
        .then(resp => {
          this.props.onUserDataLoad();
          console.log(resp);
        })
        .catch(err => console.log(err));
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
