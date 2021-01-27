import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
//import './index.css';

const Game = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h1>Hello World!!</h1>
        <h2>{props.name}</h2>
        <Button variant="outline-primary">プライマリーボタン</Button>
        <Button variant="outline-secondary">セカンダリーボタン</Button>
        <Button variant="outline-success">サクセスボタン</Button>
        <Button variant="outline-dark">ダークボタン</Button>
      </div>
    </div>
  );
} 


// ========================================

ReactDOM.render(
  <Game name="Monaco" />,
  document.getElementById('root')
);
