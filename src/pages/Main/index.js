import React, { Component } from "react";

import { Container, ButtonList, Input } from "./styles";

import { MdBackspace } from "react-icons/md";

export default class Main extends Component {
  state = {
    buttons: [],
    input: '',
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
        3,
        "+",
        "",
        0,
        ".",
        "="
      ]
    });
  }

  handleInputChange = e => {
    if (parseInt(e.target.value)) {this.setState({input: e.target.value})}
  }

  render() {
    const { buttons, input } = this.state;
    return (
      <Container>
        <Input type="text" placeholder="0" value={input} onChange={this.handleInputChange}/>
        <ButtonList>
          {buttons.map(button => (
            <li key={button} >
              <button value={button} onClick={this.handleInputChange}>{button}</button>
            </li>
          ))}
        </ButtonList>
      </Container>
    );
  }
}
