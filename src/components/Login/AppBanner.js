import React from 'react'
import classes from './AppBanner.module.scss'
import appStoreBanner from './images/app-store.png'
import playStoreBanner from './images/google-play.png'

const AppBanner = () => (
  <div className={classes.appBannerContainer}>
    <div>
      <p>Get the app.</p>
    </div>
    <div className={classes.storeLogos}>
      <img src={appStoreBanner} alt="app-store"/>
      <img src={playStoreBanner} alt="play-store"/>
    </div>
  </div>
)

export default AppBanner
