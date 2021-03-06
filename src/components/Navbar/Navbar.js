import React from 'react'
import instagramTextPNG from '../../assets/images/instagram.png'
import classes from './Navbar.module.scss'
import { useDispatch } from 'react-redux'
import { setMenuOpen } from '../../store/authentication/actions'
import firebase from '../../firebase'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()

  const openMenu = () => {
    dispatch(setMenuOpen())
  }



  return (
    <div className={classes.navbarContainer}>
      <Link to="/">
        <div className={classes.logo}>
          <img src={instagramTextPNG} alt="" />
        </div>
      </Link>
      <div className={classes.search}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={classes.icons}>
        <span>
          <Link to="/" style={{ backgroundColor: 'white' }}>
            <svg
              aria-label="Home"
              fill="#262626"
              height="22"
              viewBox="0 0 48 48"
              width="22"
            >
              <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
            </svg>
          </Link>
        </span>
        <span>
          <svg
            aria-label="Direct"
            fill="#262626"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </span>
        <span>
          <svg
            aria-label="Find People"
            fill="#262626"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path
              clipRule="evenodd"
              d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            aria-label="Activity Feed"
            fill="#262626"
            height="22"
            viewBox="0 0 48 48"
            width="22"
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </span>
        <span onClick={openMenu}>
          <img
            src={`https://via.placeholder.com/1200/FFFFFF/000000/?text=${firebase
              .getCurrentUserInfo()
              .charAt(0)}`}
            alt=""
          />
        </span>
      </div>
    </div>
  )
}

export default Navbar
