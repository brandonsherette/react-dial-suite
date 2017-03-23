import React, { Component } from 'react';
import { Dial } from './react-dial-suite/index';

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0,
      text: 0
    };
  }

  handleUpdateDial({percent, text}) {
    this.setState({percent, text});
  }

  render() {
    const { percent, text } = this.state;

    return (
      <div className="app-component text-center">
        <h1>React Dial Suite</h1>
        <div className="break"></div>
        <div className="margin-center" style={{width: 150}}>
          <Dial barPercent={percent} canvasSize={150}>
            <div className="text-center">
              <h1>{text}</h1>
              <h5>Hours</h5>
              <h3>TOTAL</h3>
            </div>
          </Dial>
        </div>
        <div className="break">
          <div className="btn-group">
            <button type="button" className="btn btn-primary" onClick={this.handleUpdateDial.bind(this, {percent: 0, text: 0})}>0%</button>
            <button type="button" className="btn btn-primary" onClick={this.handleUpdateDial.bind(this, {percent: 25, text: 6})}>25%</button>
            <button type="button" className="btn btn-primary" onClick={this.handleUpdateDial.bind(this, {percent: 50, text: 12})}>50%</button>
            <button type="button" className="btn btn-primary" onClick={this.handleUpdateDial.bind(this, {percent: 75, text: 18})}>75%</button>
            <button type="button" className="btn btn-primary" onClick={this.handleUpdateDial.bind(this, {percent: 100, text: 24})}>100%</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppComponent;
