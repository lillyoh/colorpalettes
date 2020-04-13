import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import DeleteDialog from './DeleteDialog';
import MiniPalette from './MiniPalette';

import styles from './styles/PaletteListStyles';

class PaletteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: ''
    }
  }

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  }

  toggleDialog = id => {
    this.setState({
      openDeleteDialog: !this.state.openDeleteDialog,
      deletingId: id
    });
  }

  handleDelete = (e) => {
    e.persist();
    this.props.deletePalette(this.state.deletingId);
    this.toggleDialog();
  }

  render() {
    const { palettes, classes } = this.props;
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
                    openDialog={this.toggleDialog}
                    handleClick={() => this.goToPalette(palette.id)}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
        </div>
        <DeleteDialog
          openDeleteDialog={this.state.openDeleteDialog}
          toggleDialog={this.toggleDialog}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
