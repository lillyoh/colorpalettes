import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '8vh'
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    "& a": {
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down('xs')]: {
      display: 'none'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  },
  slider: {
    width: '340px',
    margin: '0px 20px',
    display: 'inline-block',
      [sizes.down('sm')]: {
        width: '180px'
      }
  },
  level: {
    marginLeft: '10px'
  }

}
