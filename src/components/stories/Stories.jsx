import './stories.scss'

import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //Temporary data
    const stories = [
        {
            id: 1,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]


  return (
    <div className='stories'>
        <div className="story">
                <img src="https://images.pexels.com/photos/59884/pexels-photo-59884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>name</span>
                <button>+</button>
            </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories