import React from 'react'

import images from '../../constants/images'
import './AboutUs.css'

const AboutUs = () => (
  <div className="app__aboutus app__bg  section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
       <img src={images.G} alt="g letter" /> 
    </div> */}
    <div className="app__aboutus-content ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant ">About Us</h1>
        {/* <img src={images.spoon} alt="spoon" /> */}
        <p className="p__opensans">
          At TasteMate, we're passionate about serving delicious food that
          brings people together. Our chefs are dedicated to using only the
          freshest, high-quality ingredients to create mouth-watering dishes
          that are bursting with flavor. We believe that good food should be
          accessible to everyone, which is why we've made it easy for you to
          order online from the comfort of your own home. Whether you're looking
          for a quick bite or a full meal, we have something for you. So come
          dine with us or order online and taste the difference today.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
)

export default AboutUs
