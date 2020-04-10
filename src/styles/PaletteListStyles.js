import sizes from './sizes';
import bg from './bg.svg';

export default {
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#371daa',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    overflow: 'scroll'
  },
  heading: {
    fontSize: '2.5rem'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    "& a": {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1.5rem',
    [sizes.down("md")]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: 'repeat(1, 100%)'
    }
  }
};
