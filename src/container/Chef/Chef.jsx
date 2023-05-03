import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/* <img src={images.quote} alt="Quote" /> */}
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          sit, ratione mollitia commodi beatae explicabo doloremque officia
          eligendi, architecto similique voluptatem quibusdam obcaecati saepe
          numquam placeat porro ipsum vel neque.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>John Walker</p>
        <p className="p__opensans">Founder & Chef</p>
        {/* <img src={images.sign} alt="Signature" /> */}
      </div>
    </div>
  </div>
)

export default Chef
