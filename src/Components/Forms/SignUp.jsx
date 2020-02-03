import React, { Component } from "react";
import "../css/SignUp.css";
import Logo from "../../Images/DareMe_Logo.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import axios from "axios";

export class SignUp extends Component {
  handleSubmission = e => {
    e.preventDefault();
    const {
      formUsername,
      formEmail,
      formPassword,
      formPassword2,
      formAbout
    } = e.target;

    if (formPassword.value === formPassword2.value) {
      axios
        .post("http://localhost:3000/users/signup", {
          username: formUsername.value,
          email: formEmail.value,
          password: formPassword.value,
          about: formAbout.value
        })
        .then(response => {
          console.log(response);
          // alert(response.response);
          formUsername.value = "";
          formEmail.value = "";
          formPassword.value = "";
          formPassword2.value = "";
          formAbout.value = "";
        })
        .catch(error => {
          if (error.response.status === 500)
            alert(error.response.data.error.message);
          else if (error.response.status === 409)
            alert(error.response.data.message);
        });
    } else {
      alert("Password Match Failed");
    }
  };

  render() {
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
