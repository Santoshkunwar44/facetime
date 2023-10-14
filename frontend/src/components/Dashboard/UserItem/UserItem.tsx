import React from 'react'
import { UserItemWrapper } from './UserItem.styles'
import { IoVideocam } from 'react-icons/io5'
import { AiFillAudio } from 'react-icons/ai'

const UserItem = () => {
  return (
    <UserItemWrapper>
        <div className="userLeft">


        <img className='userImg' src="" alt="" />
        <div className="userInfo">
            <p className='username'>John Doe</p>
            <p className='userEmail'> john@gmail.com</p>
        </div>
        </div>
        <div className="actionBox">
            <IoVideocam className="videoTypeIcon"/>
            <AiFillAudio className="videoTypeIcon"/>
        </div>
    </UserItemWrapper>
  )
}

export default UserItem
