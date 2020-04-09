import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './seedPalettes';
import SingleColorPalette from './SingleColorPalette';
import AddPalette from './AddPalette';

import { generatePalette } from './colorHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedPalettes
    };
  }

  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id
    });
  }

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage);
  }

  syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/palette/add' render={(routeProps) =>
          <AddPalette
            savePalette={this.savePalette}
            palettes={this.state.palettes}
            {...routeProps}/>}
          />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route exact path='/' render={(routeProps) =>
          <PaletteList
            palettes={this.state.palettes}
            {...routeProps}
          />
          }
        />
        <Route
          exact
          path='/palette/:paletteId'
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
