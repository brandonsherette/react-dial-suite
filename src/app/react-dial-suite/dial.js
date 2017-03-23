import React, { Component, PropTypes } from 'react';

require('./dial.scss');

// strokeDasharray needs to be (2 * pi * radius) to allow for animation to work

class Dial extends Component {
  render() {
    const { canvasSize, children } = this.props;
    // make sure barPercent is within a valid range
    const barPercent = this.sanitizeBarPercent(this.props.barPercent);
    // circle will be 90% of canvas size
    const radius = canvasSize * 0.90 / 2;
    const strokeDasharray = Math.PI * 2 * radius;
    const strokeDashoffset = ((100 - barPercent) / 100) * strokeDasharray;
    const pos = canvasSize / 2;

    const dialStyle = {
      'width': canvasSize,
      'height': canvasSize
    };
    const progressStyle = {
      'strokeDashoffset': strokeDashoffset
    };

    return (
      <div className="dial" style={dialStyle}>
        <svg width={canvasSize} height={canvasSize} xmlns="http://www.w3.org/2000/svg">
          <circle className="shell" r={radius} cx={pos} cy={pos} strokeDasharray={strokeDasharray} strokeDashoffset="0"></circle>
          <circle className="progress" r={radius} cx={pos} cy={pos} fill="transparent" strokeDasharray={strokeDasharray} style={progressStyle}></circle>
        </svg>
        <div className="body-content">{children}</div>
      </div>
    )
  }

  sanitizeBarPercent(barPercent) {
    if (barPercent < 0) {
      return 0;
    }

    if (barPercent > 100) {
      return 100;
    }

    return barPercent;
  }
}

Dial.propTypes = {
  barPercent: PropTypes.number.isRequired,
  canvasSize: PropTypes.number
};

export default Dial;
