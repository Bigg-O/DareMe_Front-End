import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";
import Logo from "../../Images/DareMe_Logo.png";
import "../css/LogIn.css";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import axios from "axios";

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
        console.log(response);
        localStorage.setItem("JWT", response.data.token);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        if (error) alert(error.response.data.message);
      });
  };

  render() {
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
