import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  paletteFooter: {
    height: '5vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0.5rem',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  emoji: {
    fontSize: '1.5rem',
    marginLeft: '1rem'
  }
}

const PaletteFooter = props => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
