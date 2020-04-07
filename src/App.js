import React from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';

class App extends React.Component {
  render() {
    console.log(generatePalette(seedPalettes[1]))
    return (

      <div>

        <Palette palette={seedPalettes[1]}/>
      </div>
    );
  }
}

export default App;
