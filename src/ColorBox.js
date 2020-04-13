import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import styles from './styles/ColorBoxStyles';

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const { name, background, paletteId, id, showFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div style={{ background }} className={clsx(classes.copyOverlay, {
            [classes.showOverlay]: copied
          })} />
          <div className={clsx(classes.copyMessage, {
            [classes.showCopyMessage]: copied
          })}>
            <h1 className={classes.copyText}>Copied</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showFullPalette && (
             <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
           </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
