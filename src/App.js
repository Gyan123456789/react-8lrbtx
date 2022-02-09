import React from 'react';
// import "./style.css";
import { add, sub, mult, div } from './Add';

export default function App() {
  return (
    <>
      <ul>
        <li>{add(10, 20)}</li>
        <li>{sub(20, 30)}</li>
        <li>{mult(10, 20)}</li>
        <li>{div(10, 20)}</li>
      </ul>
    </>
  );
}
