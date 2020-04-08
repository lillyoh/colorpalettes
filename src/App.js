import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './seedPalettes';
import SingleColorPalette from './SingleColorPalette';

import { generatePalette } from './colorHelpers';

class App extends React.Component {
  findPalette = id => {
    return seedPalettes.find(palette => {
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
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
            palettes={seedPalettes}
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
