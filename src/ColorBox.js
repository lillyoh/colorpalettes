import React from 'react';

import './ColorBox.css';

class ColorBox extends React.Component {
  render() {
    return (
      <div className='ColorBox' style={{background: this.props.background }} >
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}

export default ColorBox;
