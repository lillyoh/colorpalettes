import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import AddPalette from './AddPalette';
import Page from './Page';

import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedPalettes
    };
  }

  findPalette = id => {
    return this.state.palettes.find(palette => {
      return palette.id === id
    });
  };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage);
  };

  deletePalette = id => {
    this.setState({
      palettes: this.state.palettes.filter(palette => palette.id !==id )
    }, this.syncLocalStorage);
  };

  syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  };

  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
          <Switch location={location}>
            <Route exact path='/palette/add' render={(routeProps) => (
              <Page>
              <AddPalette
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}/>
              </Page>
              )} />
            <Route
              exact
              path='/palette/:paletteId/:colorId'
              render={(routeProps) => (
                <Page>
                  <SingleColorPalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                </Page>
              )}
            />
            <Route exact path='/' render={(routeProps) => (
              <Page>
                <PaletteList
                  palettes={this.state.palettes}
                  deletePalette={this.deletePalette}
                  {...routeProps}
                />
              </Page>
            )}
            />
            <Route
              exact
              path='/palette/:paletteId'
              render={(routeProps) => (
                <Page>
                <Palette
                  palette={generatePalette(
                    this.findPalette(routeProps.match.params.paletteId)
                  )}
                />
                </Page>
              )}
            />
            </Switch>
          </CSSTransition>
       </TransitionGroup>
      )}/>
    );
  }
}

export default App;
