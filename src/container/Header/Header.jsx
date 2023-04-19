import React from 'react'

import images from '../../constants/images'
import './Header.css'
import { SubHeading } from '../../components'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Where every bite is a new adventure." />
      <h1 className="app__header-h1">
        Experience exquisite cuisine at your fingertips.
      </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Welcome to our online restaurant! We offer a wide variety of
        mouth-watering dishes that are sure to satisfy your cravings. From
        classic comfort food to modern culinary creations, we have something for
        everyone.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
)

export default Header
