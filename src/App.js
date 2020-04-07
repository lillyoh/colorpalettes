import React from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={seedPalettes[1]}/>
      </div>
    );
  }
}

export default App;
