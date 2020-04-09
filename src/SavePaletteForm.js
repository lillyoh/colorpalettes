import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import 'emoji-mart/css/emoji-mart.css'


class SavePaletteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'chooseName',
      newPaletteName: '',
      emoji: ''
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
    });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  showEmojiPicker = () => {
    this.setState({ phase: 'chooseEmoji'})
  }

  selectEmoji = (emoji) => {
    this.setState({ emoji: emoji.native })
  }

  savePalette = () => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: this.state.emoji
    }
    this.props.handleSubmit(newPalette)
  }


  render() {
    const { newPaletteName } = this.state;
    const { hideForm } = this.props;
    return (
      <>
      <Dialog
        open={this.state.phase==='chooseEmoji'}
        onClose={hideForm}

      >
        <Picker
          onSelect={this.selectEmoji}
          title='Choose an emoji'
          emoji=''
          skinEmoji='thumbsup'
        />
        <DialogActions>
        <Button
            variant='contained'
            color='primary'
            type='submit'
            onClick={this.savePalette}
          >
            Save
          </Button>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          </DialogActions>
      </Dialog>

      <Dialog
        open={this.state.phase==='chooseName'}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
        <ValidatorForm onSubmit={this.showEmojiPicker}>
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
            Next
          </Button>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
      </>
    );
  }
}

export default SavePaletteForm;

