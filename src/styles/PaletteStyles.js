import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '0px'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    backgroundColor: 'black',
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    "&:hover button": {
      opacity: '1',
      transition: '0.5s'
    },
    "& a": {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255,255,255,0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none'
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  },
  paletteFooter: {
    height: '5vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0.5rem',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  emoji: {
    fontSize: '1.5rem',
    marginLeft: '1rem'
  }
}
