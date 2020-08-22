import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Navbar/Menu'
import classes from './Profile.module.scss'

const Profile = () => (
  <div>
    <Navbar></Navbar>
    <Menu></Menu>
    <div className={classes.profileContainer}>
      <div className={classes.userHeader}>
        <img
          src="https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/72465946_535169153695040_2506708321726103552_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=FtEESPzmxIUAX8VxzLr&oh=2279b548ce5d12f54cbcec181dd81714&oe=5F6716FD"
          alt=""
        />
        <div className={classes.userInfo}>
          <h2>irirasit</h2>
          <div>
            <span>
              <span>2</span> posts
            </span>
            <span>
              <span>414</span> followers
            </span>
            <span>
              <span>266</span> following
            </span>
          </div>
          <span>Raşit İri</span>
        </div>
      </div>
      <div className={classes.tabs}>
        <span>
          <svg
            aria-label="Posts"
            class="_8-yf5 "
            fill="#8e8e8e"
            height="12"
            viewBox="0 0 48 48"
            width="12"
          >
            <path
              clip-rule="evenodd"
              d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span>POSTS</span>
        </span>
        <span>
          <svg
            aria-label="Posts"
            class="_8-yf5 "
            fill="#8e8e8e"
            height="12"
            viewBox="0 0 48 48"
            width="12"
          >
            <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
          </svg>
          <span>IGTV</span>
        </span>
        <span>
          <svg
            aria-label="Saved"
            class="_8-yf5 "
            fill="#8e8e8e"
            height="12"
            viewBox="0 0 48 48"
            width="12"
          >
            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
          </svg>
          <span>SAVED</span>
        </span>
        <span>
          <svg
            aria-label="Tagged"
            class="_8-yf5 "
            fill="#8e8e8e"
            height="12"
            viewBox="0 0 48 48"
            width="12"
          >
            <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
          </svg>
          <span>TAGGED</span>
        </span>
      </div>
      <div className={classes.photoGrid}>
        <div>
          <img
            src="https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2734404/pexels-photo-2734404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3553903/pexels-photo-3553903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
)

export default Profile
