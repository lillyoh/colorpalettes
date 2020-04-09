import React from 'react';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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

const drawerWidth = 400;

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
  navButtons: {

  }
})

class NewPaletteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ''
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("paletteNameUnique", value =>
      this.props.palettes.every(
       ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

    handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { open, classes, handleSubmit } = this.props;
    const { newPaletteName } = this.state;

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
              <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                <TextValidator
                  label="Palette Name"
                  value={this.state.newPaletteName}
                  name='newPaletteName'
                  onChange={this.handleChange}
                  validators={['required', 'paletteNameUnique']}
                  errorMessages={['Enter a name', 'Name already used']}
                />
                <Button
                variant='contained'
                color='primary'
                type='submit'
                >
                  Save Palette
                </Button>
              </ValidatorForm>
              <Button variant='contained' color='secondary'>
                <Link to='/'>Go Back</Link>
              </Button>
            </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteNav);
