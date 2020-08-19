import React from 'react'
import loadingSVG from '../../assets/images/loading.svg'

const Loading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
    }}
  >
    <img style={{ backgroundColor: 'transparent' }} src={loadingSVG} alt="" />
  </div>
)

export default Loading
