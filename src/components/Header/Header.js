import React, { Component } from "react";
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {<span className="title">Dictionary</span>}
      </div>
    );
  }
}
