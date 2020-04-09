import React from 'react';
import { withStyles } from '@material-ui/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    "&:hover svg": {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  removeIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};

const DraggableColorBox = props => {
  const { classes, handleClick, name, color } = props;
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color }}
    >
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span><RemoveCircleIcon className={classes.removeIcon} onClick={handleClick}/></span>
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
