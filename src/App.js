import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedPalettes from './seedPalettes';
import SingleColorPalette from './SingleColorPalette';
import AddPalette from './AddPalette';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { generatePalette } from './colorHelpers';
import './App.css';

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
  }

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage);
  }

  deletePalette = id => {
    this.setState({
      palettes: this.state.palettes.filter(palette => palette.id !==id )
    }, this.syncLocalStorage);
  }

  syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
          <Switch location={location}>
            <Route exact path='/palette/add' render={(routeProps) => (
              <div className='page'>
              <AddPalette
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}/>
              </div>
              )} />
            <Route
              exact
              path='/palette/:paletteId/:colorId'
              render={(routeProps) => (
                <div className='page'>
                  <SingleColorPalette
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                    )}
                  />
                </div>
              )}
            />
            <Route exact path='/' render={(routeProps) => (
              <div className='page'>
                <PaletteList
                  palettes={this.state.palettes}
                  deletePalette={this.deletePalette}
                  {...routeProps}
                />
              </div>
            )}
            />
            <Route
              exact
              path='/palette/:paletteId'
              render={(routeProps) => (
                <div className='page'>
                <Palette
                  palette={generatePalette(
                    this.findPalette(routeProps.match.params.paletteId)
                  )}
                />
                </div>
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
