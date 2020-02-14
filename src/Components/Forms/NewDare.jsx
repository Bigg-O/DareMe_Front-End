import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/NewDare.css";
import NewDareForm from "./NewDareForm";
import history from "../../history";
const HEROKU_URL = "https://dareme-server.herokuapp.com/"
// import axios from "axios";

export class NewDare extends Component {
  handleSubmission = e => {
    e.preventDefault();
    const jwt = localStorage.getItem("JWT");
    fetch(HEROKU_URL + "/dares", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("_id"),
        open_title: e.target.formTitle.value,
        open_description: e.target.formDescription.value,
        open_pic_url: e.target.formPic.value,
        wanted_profit: e.target.formPrice.value
      })
    })
      .then(response => {
        console.log(response)
        history.push("/");
        this.props.onDareDataLoad()
      })
      .catch(error => console.log(error.response));
    // axios
    //   .post(HEROKU_URL + "/dares", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${jwt}`
    //     },
    //     body: JSON.stringify({
    //       user_id: localStorage.getItem("_id"),
    //       open_title: e.target.formTitle.value,
    //       open_description: e.target.formDescription.value,
    //       open_pic_url: e.target.formPic.value,
    //       wanted_profit: e.target.formPrice.value
    //     })
    //   })
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error.response));
  };

  render() {
    return (
      <Container fluid className="newdare-container">
        <h1 className="newdare-title">New Dare!</h1>

        <NewDareForm onSubmit={this.handleSubmission} />
      </Container>
    );
  }
}

export default NewDare;
