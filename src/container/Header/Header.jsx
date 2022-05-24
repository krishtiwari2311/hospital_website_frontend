import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
    <SubHeading title="24 x 7"  />
      <h1 className="app__header-h1">Your Health Our Priority</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' ,color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus neque nec dolor dapibus </p>
      <button type="button" className="custom__button">Explore Services</button>
      </div>

      <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
    </div>

);

export default Header;
