import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

class Counter extends PureComponent {
  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }

  minus() {
    this.setState({ count: this.state.count - 1 })
  }

  plus() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button onClick={() => this.minus()}>-</Button>
        {count}
        <Button onClick={() => this.plus()}>+</Button>
      </div>
    )
  }
};

export default Counter;
