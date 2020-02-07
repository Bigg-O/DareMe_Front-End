import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import Logo from "../../Images/DareMe_Logo.png";
import "../css/LogIn.css";
import { Link, Redirect } from "react-router-dom";
import LogInForm from "./LogInForm";
import axios from "axios";
import history from "../../history";

export class LogIn extends Component {
  handleSubmission = e => {
    e.preventDefault();

    // Make Post request to backend and store JWT key to local storage
    axios
      .post("http://localhost:3000/users/login", {
        username: e.target.formUsername.value,
        password: e.target.formPassword.value
      })
      .then(response => {
        console.log("successful Login: ", response);
        localStorage.setItem("JWT", response.data.token);
        this.props.onLogin(response.data.user);
        history.push("/");
      })
      .catch(error => {
        console.log("Error in Login: ", error);
        if (error.response) alert(error.response.data.message);
      });
  };

  render() {
    if (localStorage.getItem("JWT")) {
      return <Redirect to="/" />;
    } else
      return (
        <Container fluid className="login-container">
          <Image className="login-logo" src={Logo} fluid />

          <LogInForm onSubmit={this.handleSubmission} />

          <p className="sign-up">
            Sign up for free!{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </Container>
      );
  }
}

export default LogIn;
