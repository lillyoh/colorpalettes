import React from 'react';

import ColorBox from './ColorBox';

import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from 'rc-slider/lib/Slider';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
  }

  changeLevel = (newLevel) => {
    this.setState({
      level: newLevel
    })
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (<ColorBox background={color.hex} name={color.name}/>));
    return (
      <div className='Palette'>
        <div className='slider'>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
          handleStyle={{
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px'
          }}
          trackStyle={{ backgroundColor: 'transparent' }}
          railStyle={{ height: 8 }}
        />
        </div>
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palette;
