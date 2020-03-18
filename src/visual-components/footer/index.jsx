import React, { Component } from 'react';
import Link from 'next/link';
import './style.less';
import PropTypes from 'prop-types';
/**
 * Use `Footer` to add a footer to page.\n
 */
class Footer extends Component {
  render() {
    return (
      <footer className='footer-component'>
        <div className='links'>
          <Link as='/about' href='/about'>
            <a>About</a>
          </Link>
          ●
          <Link as='/about' href='/about'>
            <a>Help</a>
          </Link>
          ●
          <Link as='/about' href='/about'>
            <a>Privacy</a>
          </Link>
          ●
          <Link as='/about' href='/about'>
            <a>Terms</a>
          </Link>
        </div>

        <div className='bottom'>
          <div className='copyright'>© 2020</div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  /**  Any Prop Here Define usage */
  any: PropTypes.string
}

Footer.defaultProps = {
  any: 'hello'
}

export default Footer;
