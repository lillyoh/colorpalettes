import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SavePaletteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newPaletteName: ''
    };
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

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { newPaletteName } = this.state;
    const { handleSubmit, hideForm } = this.props;
    return (

        <Dialog
          open={this.state.open}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              What do you want to call your new Palette?
            </DialogContentText>
                <TextValidator
                  label="Palette Name"
                  value={newPaletteName}
                  name='newPaletteName'
                  fullWidth
                  margin='normal'
                  onChange={this.handleChange}
                  validators={['required', 'paletteNameUnique']}
                  errorMessages={['Enter a name', 'Name already used']}
                />
          </DialogContent>
          <DialogActions>
            <Button
              variant='contained'
              color='primary'
              type='submit'
            >
              Save
            </Button>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>

    );
  }
}

export default SavePaletteForm;

