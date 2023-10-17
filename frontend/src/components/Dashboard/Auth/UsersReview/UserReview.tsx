import { UserReviewWrapper } from './UserReview.styles'
import { Rating } from '@mui/material';

const UserReview = () => {
  return (
    <UserReviewWrapper>

        <h1 className='reviewtitle'>Awesome video calling experience</h1>

        <p className='reviewDesc'>I got facetime as expected . I got full video calling eperience and i prompt everyone to atleast use this site then you will get a chance to experience smooth interactive calling feature</p>
        <div className="reivewBottomBox">
            <div className="userBox">
                <img src="https://images.pexels.com/photos/17725774/pexels-photo-17725774/free-photo-of-a-woman-sitting-on-a-bench-with-a-flower-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                <p className='reviewUsername'> Catherin Johnson</p>

            </div>
            <Rating
            size='small'
  name="simple-controlled"
  value={5}
    readOnly
/>
        </div>
    </UserReviewWrapper>
  )
}

export default UserReview