import React, { Component } from "react";
import './HomeStyle.css'
import { Link } from "react-router-dom";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="Area">
        <h1 className='Head'>Quiz App</h1>
        <Link to='/quiz'><button className='button'>Play</button></Link>
        </div>
      </div>
    );
  }
}