import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    }
  }

  handleChange = (e) => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='/'>color picker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
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
        </div>
        <div className='select-container'>
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #fffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>

      </header>
    )
  }
}

export default Navbar;
