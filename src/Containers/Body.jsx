import React, { Component } from "react";
import OpenDareCard from "../Components/OpenDareCard";
import CardColumns from "react-bootstrap/CardColumns";

export class Body extends Component {
  render() {
    const { dares, onPay } = this.props;
    return (
      <CardColumns>
        {dares.map(dare => (
          <OpenDareCard key={dare.id} dare={dare} onPay={onPay} />
        ))}
      </CardColumns>
    );
  }
}

export default Body;
