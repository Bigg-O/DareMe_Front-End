import React, { Component } from "react";
import DareCard from "../components/DareCard"
import CardColumns from "react-bootstrap/CardColumns"

export class Body extends Component {
  render() {
    return (
      <CardColumns>
        <DareCard />
      </CardColumns>
    );
  }
}

export default Body;
