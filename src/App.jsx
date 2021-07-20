import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
const Container = styled.div`
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <Button type="button" onClick={() => setCount((count) => count + 1)}>
          How much we rule: {count}
        </Button>
        <Button
          primary
          onClick={() => {
            window.location = 'https://github.com/elcarpios/find-me';
          }}
        >
          Primary Button!
        </Button>
      </Container>
    </div>
  );
}

export default App;
