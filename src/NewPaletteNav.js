import React from 'react';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SavePaletteForm  from './SavePaletteForm';

import styles from './styles/NewPaletteNavStyles';

class NewPaletteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
      formShowing: false
    }
  }

  showForm = () => {
    this.setState({ formShowing: true })
  }

  hideForm = () => {
    this.setState({ formShowing: false })
  }

  render() {
    const { open, classes, palettes, handleSubmit } = this.props;

    return (
      <div>
         <CssBaseline className={classes.root} />
        <AppBar
          position='fixed'
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <AddCircleIcon
              color='inherit'
              aria-label='open drawer'
              onClick={this.props.handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </AddCircleIcon>
            <Typography variant='h6' color='inherit' noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
              <Button variant='contained' color='secondary' className={classes.button}>
                <Link to='/'>Go Back</Link>
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={this.showForm}
                className={classes.button}
              >
                Save Palette
              </Button>
            </div>
        </AppBar>
        { this.state.formShowing && (
           <SavePaletteForm
           palettes={palettes}
           handleSubmit={handleSubmit}
           hideForm={this.hideForm}
         />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteNav);
