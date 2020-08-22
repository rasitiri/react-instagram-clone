import React from 'react'
import classes from './Suggestions.module.scss'
import User from './User'
import { Link } from 'react-router-dom'

const Suggestions = () => {
  const dummy = [
    {
      username: 'hm_son7',
      imgUrl:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/89702461_241223783579455_197774112880328704_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=Fasb3hwsJGMAX8jixMd&oh=2eafa899cf540b2337c03ddfc25aac0e&oe=5F671D5E',
    },
    {
      username: 'harrykane',
      imgUrl:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/66710300_658990501252314_3782977524682719232_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=BTC67_kKZFAAX_K9o7c&oh=b3f7d74e602d977442dbe2f80babaca1&oe=5F6A06FA',
    },
    {
      username: 'garethbale11',
      imgUrl:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/97136862_702839713802578_7837045271895736320_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=NAd7LMPkPeoAX_Gu38V&oh=919afd251064eb4957ceaf61ef4fe58b&oe=5F6A3343',
    },
    {
      username: 'antogriezmann',
      imgUrl:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/67560059_2234688466642322_8772416430873247744_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=d30QNRqrmb4AX-3KBlU&oh=cc5be0ebc12e73f37a799e49d8dc0b0b&oe=5F6568F6',
    },
    {
      username: 'donnyvdbeek',
      imgUrl:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/79596587_760782371108888_3164641618632376320_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=PyiNTeeD-W8AX_MdWx0&oh=94f7eef718ec48b7ceff8c483bdc9f3f&oe=5F68C2C3',
    },
  ]

  return (
    <div className={classes.suggestionsContainer}>
      <div className={classes.userPhoto}>
        <img
          src="https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/72465946_535169153695040_2506708321726103552_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=FtEESPzmxIUAX8VxzLr&oh=2279b548ce5d12f54cbcec181dd81714&oe=5F6716FD"
          alt=""
        />
        <div>
          <p>
            <Link to="/profile">irirasit</Link>
          </p>
          <span>Raşit İri</span>
        </div>
      </div>
      <div className={classes.friendSuggestions}>
        <div className={classes.infoText}>
          <p>Suggestions For You</p>
          <span>See All</span>
        </div>
        <div className={classes.userSuggestions}>
          {dummy.map(user => (
            <User
              username={user.username}
              imgUrl={user.imgUrl}
              key={user.username}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Suggestions
