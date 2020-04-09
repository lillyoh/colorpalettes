import React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = {
  picker: {
    width: '100%',
    marginTop: '1rem'
  },
  addColorButton: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '1rem'
  },
  colorNameInput: {
    width: '100%'
  }
}

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: '#A2CE52',
      newColorName: ''
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("colorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule("colorUnique", value =>
      this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      )
    );
  }

  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div>
        <ChromePicker
              color={currentColor}
              width='100%'
              onChangeComplete={this.updateCurrentColor}
              className={classes.picker}
          />
          <ValidatorForm
            onSubmit={this.handleSubmit}
            instantValidate={false}
          >
            <TextValidator
              value={newColorName}
              name='newColorName'
              placeholder='Color Name'
              variant='filled'
              onChange={this.handleChange}
              validators={["required", "colorNameUnique", "colorUnique"]}
              errorMessages={["Name this swatch", "Name already used", "Color already saved"]}
              className={classes.colorNameInput}
              margin='normal'
            />
            <Button
              variant='contained'
              color='primary'
              style={{ backgroundColor: paletteIsFull ? '#C0C3BC' : currentColor }}
              type='submit'
              disabled={paletteIsFull}
              className={classes.addColorButton}
            >
              {paletteIsFull ? 'Palette Full' : 'Add Color'}
            </Button>
          </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPicker)
