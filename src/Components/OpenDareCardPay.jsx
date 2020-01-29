import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Alert from "react-bootstrap/Alert";

export class OpenDareCardPay extends Component {
  constructor() {
    super();
    this.state = {
      selected_amount: 0
    };
  }

  handlePayAmount = selected_amount => {
    this.setState({ selected_amount });
  };

  render() {
    const { id, amount, username, wanted_profit } = this.props.dare;

    if (wanted_profit === amount) {
      return (
        <div>
          <ProgressBar
            striped
            variant="success"
            now={100}
            label={`$${amount}`}
          />
          <br />
          <Alert variant="info">DARE IS IN PROGRESS</Alert>
        </div>
      );
    } else
      return (
        <div>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup>
              <ButtonGroup className="mr-1">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  onChange={this.handlePayAmount}
                >
                  <ToggleButton value={1}>$1</ToggleButton>
                  <ToggleButton value={2}>$2</ToggleButton>
                  <ToggleButton value={3}>$3</ToggleButton>
                  <ToggleButton value={4}>$4</ToggleButton>
                  <ToggleButton value={5}>$5</ToggleButton>
                </ToggleButtonGroup>
              </ButtonGroup>
              <Button
                variant="outline-danger"
                onClick={() => this.props.onPay(id, this.state.selected_amount)}
              >
                Dare
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <br />
          <ProgressBar
            striped
            variant="danger"
            now={(amount / wanted_profit) * 100}
            label={`$${amount}`}
          />
          <br />
          {`${username} dares for $${wanted_profit}`}
        </div>
      );
  }
}

export default OpenDareCardPay;
