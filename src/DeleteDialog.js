import React from 'react';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const DeleteDialog = (props) => {
  const { openDeleteDialog, toggleDialog, handleDelete } = props;
  return (
    <Dialog open={openDeleteDialog} aria-labelledby='delete-dialog-title' onClick={toggleDialog}>
          <DialogTitle id='delete-dialog-title'>Delete this Palette?</DialogTitle>
          <List>
            <ListItem button onClick={handleDelete}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={toggleDialog}>
              <ListItemAvatar>
              <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItem>
          </List>
        </Dialog>
  );
}

export default DeleteDialog;
