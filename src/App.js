import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './seedPalettes';
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
        <Route exact path='/' render={(routeProps) =>
          <PaletteList
            palettes={seedPalettes}
            {...routeProps}
          />
          }
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    )



      // <div>
      //   <Palette palette={generatePalette(seedPalettes[1])}/>
      // </div>
  }
}

export default App;
