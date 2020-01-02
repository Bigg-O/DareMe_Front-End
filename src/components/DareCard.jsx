import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

export class DareCard extends Component {
  render() {
    return (
      <Card>
        <Card.Header>{"<username>"}</Card.Header>

        <Card.Img
          variant="top"
          src="https://si.wsj.net/public/resources/images/P1-BF319_CINNAM_E_20120314182945.jpg"
        />

        <Card.Body>
          <Card.Title>I'm gonna do this</Card.Title>
          <Card.Text>
            I'm gonna take a spoon full of cinnamon pouder and take it like a
            beast y'all
          </Card.Text>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup>
              <ButtonGroup className="mr-1">
                <ToggleButtonGroup type="radio" name="options">
                  <ToggleButton value={1}>$1</ToggleButton>
                  <ToggleButton value={2}>$2</ToggleButton>
                  <ToggleButton value={3}>$3</ToggleButton>
                  <ToggleButton value={4}>$4</ToggleButton>
                  <ToggleButton value={5}>$5</ToggleButton>
                </ToggleButtonGroup>
              </ButtonGroup>
              <Button variant="outline-danger">Dare</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <br />
          <ProgressBar striped variant="danger" now={80} label={`$80`} />
          <br />
          {"<username>"} dares for $100
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default DareCard;
