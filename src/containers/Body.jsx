import React, { Component } from "react";
import OpenDareCard from "../components/OpenDareCard";
import CardColumns from "react-bootstrap/CardColumns";

export class Body extends Component {
  render() {
    const {dares, onPay} = this.props
    return (
      <div>
        <CardColumns className="col">
          {dares.map(dare => 
            <OpenDareCard key={dare.id} dare={dare} onPay={onPay}/>
          )}
        </CardColumns>
      </div>
    );
  }
}

export default Body;
