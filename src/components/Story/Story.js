import React from 'react'
import classes from './Story.module.scss'
import Carousel, { consts } from 'react-elastic-carousel'

const Story = () => {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        style={{
          height: '30px',
          alignSelf: 'center',
          backgroundColor: 'white',
          width: '35px',
          borderRadius: '99px',
          outline: 'none',
          border: '1px solid #ccc',
          boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 0.098)',
          fontWeight:'600',
        }}
      >
        {pointer}
      </button>
    )
  }

  return (
    <div className={classes.storyContainer}>
      <Carousel
        itemPadding={[0, 40]}
        pagination={false}
        itemsToShow={6}
        renderArrow={myArrow}
        className={classes.carousel}
      >
        {[1,2,3,4,5,6,7,8,9].map(i => (
          <div className={classes.storyItem} key={i}>
            <img
              src="https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/72465946_535169153695040_2506708321726103552_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=FtEESPzmxIUAX8VxzLr&oh=2279b548ce5d12f54cbcec181dd81714&oe=5F6716FD"
              alt=""
            />
            <span>_rl9</span>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Story
