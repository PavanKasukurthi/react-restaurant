import React from 'react'

import styled from 'styled-components'
import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <Wrapper>
    <div className="subHeading">
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  .subHeading {
    margin-bottom: 1rem;
  }
`

export default SubHeading
