import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, withTheme } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    backgroundColor: 'black',
    width: '20%',
    height: props => props.showFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    "&:hover button": {
      opacity: '1',
      transition: '0.5s'
    },
    "& a": {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255,255,255,0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none'
    }
  }
}

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
    const { classes } = this.props;
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
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showAllColors={false}/>
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
