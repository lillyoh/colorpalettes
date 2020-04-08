import React from 'react';
import { withStyles } from '@material-ui/styles';

import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import styles from './styles/PaletteStyles';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
  }

  changeLevel = (newLevel) => {
    this.setState({
      level: newLevel
    })
  }

  changeFormat = (value) => {
    this.setState({ format: value })
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColors={true}
        />
        <div className={classes.colors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
