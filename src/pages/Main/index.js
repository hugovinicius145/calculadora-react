import React, { Component } from "react";

import { Container, ButtonList, Input } from "./styles";

import { MdBackspace } from "react-icons/md";

export default class Main extends Component {
  state = {
    buttons: [],
    expression: [],
    partial: "",
    output: '',
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

  handleInputChange = ({ target: { value } }) => {
    const { expression } = this.state;

    value !== "C" ? (
      this.setState({ expression: [...expression, value] })
    ) : (
      this.setState({ expression: [] })
    );
  };

  render() {
    const { buttons, expression, output } = this.state;
    return (
      <Container>
        <Input
          type="text"
          placeholder="0"
          value={expression.join('')}
          disabled
          onChange={this.handleInputChange}
        />
        <ButtonList>
          {buttons.map(button => (
            <li key={button}>
              {
                (parseInt(button) || button === "0")? (
                  <button style={{ color: '#fff' }} value={button} onClick={this.handleInputChange}>
                {button}
              </button>
                ) : (
                  <button value={button} onClick={this.handleInputChange}>
                {button}
              </button>
                )
              }
            </li>
          ))}
        </ButtonList>
        {console.log(output, expression)}
      </Container>
    );
  }
}
