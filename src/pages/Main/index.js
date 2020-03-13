import React, { Component } from "react";

import { Container, ButtonList, Input } from "./styles";

import { MdBackspace } from "react-icons/md";

export default class Main extends Component {
  state = {
    buttons: []
  };

  componentDidMount() {
    this.setState({
      buttons: [
        "C",
        <MdBackspace />,
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

  render() {
    const { buttons } = this.state;
    return (
      <Container>
        <Input type="text" placeholder="0" maxLength={20} />
        <ButtonList>
          {buttons.map(button => (
            <li key={button}>
              <span>{button}</span>
            </li>
          ))}
        </ButtonList>
      </Container>
    );
  }
}
