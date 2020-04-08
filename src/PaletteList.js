import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import MiniPalette from './MiniPalette';

import styles from './styles/PaletteListStyles';

class PaletteList extends React.Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Colors</h1>
            <Link to='/palette/add'>Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
            <MiniPalette
              {...palette}
              handleClick={() => this.goToPalette(palette.id)}
            />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

/* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */



export default withStyles(styles)(PaletteList);
