import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Navbar/Menu'
import classes from './Home.module.scss'
import Story from '../../components/Story/Story'
import Suggestions from '../../components/Suggestions/Suggestions'
import Post from '../../components/Post/Post'

const Home = () => {
  const dummy = [
    {
      username: 'rasitiri',
      userPhoto:
        'https://avatars0.githubusercontent.com/u/30735258?s=460&u=83a7f783ee9e0aca88cadaba714f7a48071806cf&v=4',
      photo:
        'https://images.pexels.com/photos/3553903/pexels-photo-3553903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      likeCount: 1422,
      description: 'beautiful pets...',
      sharedAt: '3 HOURS AGO',
    },
    {
      username: 'sergio',
      userPhoto:
        'https://images.pexels.com/users/avatars/138962/nicolas-postiglioni-136.jpeg?w=256&h=256&fit=crop&auto=compress',
      photo:
        'https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      likeCount: 913,
      description: '',
      sharedAt: '5 HOURS AGO',
    },
    {
      username: 'jonas',
      userPhoto:
        'https://images.pexels.com/users/avatars/840092/aa-dil-111.jpeg?w=256&h=256&fit=crop&auto=compress',
      photo:
        'https://images.pexels.com/photos/2734404/pexels-photo-2734404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      likeCount: 3268,
      description: 'Moment...',
      sharedAt: '21 Feb 2020',
    },
    {
      username: 'fabian',
      userPhoto:
        'https://images.pexels.com/users/avatars/369193/fabian-wiktor-985.jpeg?w=256&h=256&fit=crop&auto=compress',
      photo:
        'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      likeCount: 921,
      description: 'on beach...',
      sharedAt: '10 Jan 2020',
    },
  ]

  return (
    <div>
      <Navbar></Navbar>
      <Menu></Menu>
      <div className={classes.content}>
        <div className={classes.fieldOne}>
          <Story></Story>
          <div
            style={{
              margin: '15px 0',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {dummy.map(data => (
              <Post
                key={data.username}
                username={data.username}
                photo={data.photo}
                userPhoto={data.userPhoto}
                likeCount={data.likeCount}
                description={data.description}
                sharedAt={data.sharedAt}
              ></Post>
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
