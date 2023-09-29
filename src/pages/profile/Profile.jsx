import './profile.scss'
import Posts from '../../components/posts/Posts'
import { FacebookTwoTone } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Place } from '@mui/icons-material'
import { Language } from '@mui/icons-material'
import { EmailOutlined } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
      <img src="https://images.pexels.com/photos/3573603/pexels-photo-3573603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='cover' />
      <img src="https://images.pexels.com/photos/18364541/pexels-photo-18364541/free-photo-of-side-view-of-a-woman-sitting-with-eyes-closed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
      <div className="uInfo">
        <div className="left">
          <a href="http://facebook.com">
            <FacebookTwoTone  />
          </a>
          <a href="http://instagram.com">
            <Instagram  />
          </a>
          <a href="http://twitter.com">
            <Twitter />
          </a>
          <a href="http://linkedin.com">
            <LinkedIn  />
          </a>
          <a href="http://pinterest.com">
            <Pinterest  />
          </a>
        </div>
        <div className="center">
          <span>Jane Doe</span>
          <div className="info">
            <div className="item">
              <Place />
              <span>USA</span>
            </div>
            <div className="item">
              <Language />
              <span>lama.dev</span>
            </div>
          </div>
            <button>follow</button>
        </div>
        <div className="right">
          <EmailOutlined />
          <MoreVert />
        </div>
      </div>
      <Posts />
      </div>
    </div>
  )
}

export default Profile