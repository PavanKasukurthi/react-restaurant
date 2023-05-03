import React, { useRef } from 'react'

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'

import './Gallery.css'

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: 'AAA', marginTop: '3rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          consectetur consequuntur quod nobis, error id corporis libero eaque
          officiis commodi, voluptas aut quas expedita porro eius ab quaerat eum
          dignissimos.
        </p>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}></div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
