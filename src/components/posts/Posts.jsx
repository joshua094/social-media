import Post from '../post/Post'
import './posts.scss'

import React from 'react'

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur",
      img: "https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur",
      
    }
  ]
  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts