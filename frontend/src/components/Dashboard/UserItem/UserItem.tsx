import { UserItemWrapper } from './UserItem.styles'
import { IoVideocam } from 'react-icons/io5'
import { AiFillAudio, AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const UserItem = () => {
  return (
    <UserItemWrapper>
        <div className="userLeft">
        <img className='userImg' src="https://images.pexels.com/photos/14079121/pexels-photo-14079121.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        <div className="userInfo">
            <p className='username'>John Doe</p>
            <p className='userEmail'> john@gmail.com</p>
        </div>
        </div>
        <div className="actionBox">
             <Link to={"/call/123?type=video"}>
              <IoVideocam className="videoTypeIcon"/>
            </Link>
            <Link to={"/call/123?type=audio"}>
            <AiFillPhone className="videoTypeIcon"/>
            </Link>
        </div>
    </UserItemWrapper>
  )
}

export default UserItem
