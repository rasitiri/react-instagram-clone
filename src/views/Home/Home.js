import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Navbar/Menu'
import classes from './Home.module.scss'
import Story from '../../components/Story/Story'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <div className={classes.content}>
        <div className={classes.fieldOne}>
          <Story></Story>
        </div>
        <div className={classes.fieldTwo}>Field 2</div>
      </div>
    </div>
  )
}

export default Home
