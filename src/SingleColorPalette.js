import React from 'react';
import { Link } from 'react-router-dom';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


class SingleColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this.shades = this.getShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex'
    }
  }

  getShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id===colorToFilterBy))
    }
    return shades.slice(1);
  }

  changeFormat = value => {
    this.setState({
      format: value
    })
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this.shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showfullPalette={false}
      />
    ));
    return (
      <div className='SingleColorPalette Palette'>
        <Navbar handleChange={this.changeFormat} showAllColors={false}/>
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='go-back ColorBox'>
            <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
