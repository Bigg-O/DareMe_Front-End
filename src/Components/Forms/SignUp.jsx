import React, { Component } from "react";
import "../css/SignUp.css";
import Logo from "../../Images/DareMe_Logo.png";
import { Container, Image } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import axios from "axios";

export class SignUp extends Component {
  handleSubmission = e => {
    e.preventDefault();
    if (e.target.formPassword.value === e.target.formPassword2.value) {
      axios
        .post("http://localhost:3000/users/signup", {
          username: e.target.formUsername.value,
          email: e.target.formEmail.value,
          password: e.target.formPassword.value,
          about: e.target.formAbout.value
        })
        .then(response => {
          console.log(response);
          alert(response.data.message);
          e.target.formUsername.value = "";
          e.target.formEmail.value = "";
          e.target.formPassword.value = "";
          e.target.formPassword2.value = "";
          e.target.formAbout.value = "";
        })
        .catch(error => {
          console.log(error);
          if (error) {
            if (error.response.status === 500)
              alert(error.response.data.error.message);
            else if (error.response.status === 409)
              alert(error.response.data.message);
          }
        });
    } else {
      alert("Password Match Failed");
    }
  };

  render() {
    if (localStorage.getItem("JWT")) {
      return <Redirect to="/" />;
    } else
      return (
        <Container fluid className="signup-container">
          <Image className="login-logo" src={Logo} fluid />

          <h1 className="signup-desc">Create an Account!</h1>

          <SignUpForm onSubmit={this.handleSubmission} />

          <p className="b2-login">
            Actually I have an account, back to{" "}
            <Link className="login-link" to="/login">
              Log In
            </Link>
          </p>
        </Container>
      );
  }
}

export default SignUp;
