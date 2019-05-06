import React, { Component } from 'react';
import $ from 'jquery'

export default class Tiles extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="tile-container">
        <div className="tiles">
          <div className="tile" id="tile-1">Coding</div>
          <div className="tile" id="tile-2">Philosophy</div>
          <div className="tile" id="tile-3">Teaching</div>
          <div className="tile" id="tile-4">Adventure</div>
          <div className="tile" id="tile-5">Creative</div>
          <div className="tile" id="tile-6">Mom</div>
        </div>
      </div>
    );
  };


}
