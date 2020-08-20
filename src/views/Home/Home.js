import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Navbar/Menu'
import classes from './Home.module.scss'
import Story from '../../components/Story/Story'
import Suggestions from '../../components/Suggestions/Suggestions'
import Post from '../../components/Post/Post'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <div className={classes.content}>
        <div className={classes.fieldOne}>
          <Story></Story>
          <div style={{ margin: '15px 0' }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Post></Post>
            ))}
          </div>
        </div>
        <div className={classes.fieldTwo}>
          <Suggestions></Suggestions>
        </div>
      </div>
    </div>
  )
}

export default Home
