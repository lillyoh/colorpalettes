import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MiniPalette from './MiniPalette';

import styles from './styles/PaletteListStyles';

class PaletteList extends React.Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>Colors</h1>
            <Link to='/palette/add'>Create New Palette</Link>
          </nav>
            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                  <MiniPalette
                    {...palette}
                    key={palette.id}
                    id={palette.id}
                    handleDelete={deletePalette}
                    handleClick={() => this.goToPalette(palette.id)}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
