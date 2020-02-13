import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./css/UserInfo.css";

export class UserInfo extends Component {
  render() {
    return (
      <Jumbotron fluid className="user-info">
        <h1>Hello, {localStorage.getItem("username")}</h1>
        <br />
        <p>Wallet: {localStorage.getItem("wallet")}</p>
        <p>email: {localStorage.getItem("email")}</p>
        <p>about: {localStorage.getItem("about")}</p>
      </Jumbotron>
    );
  }
}

export default UserInfo;
