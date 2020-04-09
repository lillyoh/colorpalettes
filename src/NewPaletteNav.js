import React from 'react';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SavePaletteForm  from './SavePaletteForm';

const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navButtons: {
    marginRight: '1rem',
    "& a": {
      textDecoration: 'none'
    }
  },
  button: {
    margin: '0 0.5rem'
  }
})

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
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
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
