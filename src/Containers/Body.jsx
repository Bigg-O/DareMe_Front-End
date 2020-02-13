import React, { Component } from "react";
import OpenDareCard from "../Components/OpenDareCard";
import { CardColumns } from "react-bootstrap";
import "./css/Body.css";

export class Body extends Component {
  render() {
    const { dares } = this.props;
    return (
      <CardColumns>
        {dares.map(dare => (
          <OpenDareCard
            key={dare._id}
            dare={dare}
            onDareDataLoad={this.props.onDareDataLoad}
            onUserDataLoad={this.props.onUserDataLoad}
          />
        ))}
      </CardColumns>
    );
  }
}

export default Body;
