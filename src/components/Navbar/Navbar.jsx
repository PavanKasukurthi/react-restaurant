import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import styled from 'styled-components'
// import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <Wrapper>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          {/* <img src={images.gericht} alt="Logo" /> */}
          <a href="/">
            <h1 className="logo">TasteMate</h1>
          </a>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log in / Register
          </a>
          <div />
          <a href="/" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={() => setToggleMenu(false)}>
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#awards" onClick={() => setToggleMenu(false)}>
                    Awards
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setToggleMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .app__navbar-logo {
    // font-weight: 100;
    color: white;
    font-size: 2rem;
    width: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }
  .app__navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111;

    padding: 1rem 2rem;
  }

  .app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    list-style: none;
    gap: 2rem;
  }

  .app__navbar-links li:hover {
    color: var(--color-grey);
  }

  .app__navbar-login {
    display: flex;
    justify-content: flex-end;

    gap: 1rem;
  }

  .app__navbar-login a {
    text-decoration: none;
    transition: 0.5s ease;
  }

  .app__navbar-login a:hover {
    border-bottom: 1px solid var(--color-grey);
    color: var(--color-grey);
  }

  .app__navbar-login div {
    width: 1px;
    height: 30px;
    background-color: var(--color-grey);
  }

  .app__navbar-smallscreen {
    display: none;
  }

  .app__navbar-smallscreen_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-black);
    transition: 0.5s ease;

    flex-direction: column;
    z-index: 5;
  }

  .app__navbar-smallscreen_overlay .overlay__close {
    font-size: 27px;
    color: #fff;
    cursor: pointer;

    position: absolute;
    top: 20px;
    right: 20px;
  }

  .app__navbar-smallscreen_links {
    list-style: none;
    color: #fff;
  }

  .app__navbar-smallscreen_links li {
    margin: 2rem;
    font-size: 2rem;
    text-align: center;

    transition: 0.5s ease;
  }

  .app__navbar-smallscreen_links li:hover {
    color: var(--color-grey);
  }

  @media screen and (max-width: 2000px) {
    .app__navbar-logo h1 {
      width: 210px;
    }
  }

  @media screen and (max-width: 1150px) {
    .app__navbar-links {
      display: none;
    }

    .app__navbar-smallscreen {
      display: flex;
    }
  }

  @media screen and (max-width: 650px) {
    .app__navbar {
      padding: 1rem;
    }

    .app__navbar-login {
      display: none;
    }

    .app__navbar-logo h1 {
      font-size: 30px;
    }
  }
`

export default Navbar
