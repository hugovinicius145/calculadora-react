import React, { Component } from "react";

import { Container, ButtonList, Input } from "./styles";

import { MdBackspace } from "react-icons/md";

export default class Main extends Component {
  state = {
    buttons: [],
    input: "",
    expression: [],
    partial: ""
  };

  componentDidMount() {
    this.setState({
      buttons: [
        "C",
        <MdBackspace value="backspace" />,
        "%",
        "/",
        "7",
        "8",
        "9",
        "x",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "",
        "0",
        ".",
        "="
      ]
    });
  }

  handleInputChange = e => {
    const { partial } = this.state;
    if (parseInt(e.target.value) || e.target.value === "0") {
      this.setState({ partial: partial + e.target.value });
    }
  };

  render() {
    const { buttons, input, partial } = this.state;
    return (
      <Container>
        <Input
          type="text"
          placeholder="0"
          value={partial}
          onChange={this.handleInputChange}
        />
        <ButtonList>
          {buttons.map(button => (
            <li key={button}>
              <button value={button} onClick={this.handleInputChange}>
                {button}
              </button>
            </li>
          ))}
        </ButtonList>
        {console.log(partial)}
      </Container>
    );
  }
}
