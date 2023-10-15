import React from 'react'
import { UserReviewWrapper } from './UserReview.styles'

const UserReview = () => {
  return (
    <UserReviewWrapper>

        <h1 className='reviewtitle'>Awesome video calling experience</h1>

        <p className='reviewDesc'>I got facetime as expected . I got full video calling eperience and i prompt everyone to atleast use this site then you will get a chance to experience smooth interactive calling feature</p>
        <div className="reivewBottomBox">
            <div className="userBox">
                <img src="" alt="" />
                <p>Catherin Johnson</p>

            </div>
            
        </div>
    </UserReviewWrapper>
  )
}

export default UserReview