import React from 'react'
import loadingSVG from '../../assets/images/loading1.svg'

const Loading = () => (
  <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'80vh'}}>
    <img style={{ backgroundColor: 'transparent' }} src={loadingSVG} alt="" />
  </div>
)

export default Loading
