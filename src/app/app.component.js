import React, { Component } from 'react';
import { Dial } from './react-dial-suite/index';

class AppComponent extends Component {
  render() {
    return (
      <div className="app-component">
        <h1>React Dial Suite</h1>
        <Dial />
      </div>
    );
  }
}

export default AppComponent;
