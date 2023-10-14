import { ProfileCardWrapper } from './ProfileCard.styles'

const ProfileCard = () => {
  return (
    <ProfileCardWrapper>

        <div className='mainInfo'>

            <img className='profilePicture' src="https://images.pexels.com/photos/17951454/pexels-photo-17951454/free-photo-of-man-in-forests.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            <div className="textInfo">
                <h4 className='profileUsername'>Santosh kunwar</h4>
                <p className='profileEmail'>santoshkunwar9454@gmail.com</p>
            </div>




        </div>
        <button className='creditBox'>
            19 min credit left
        </button>

        <div className="userDescBox">
            <p>Country :  Nepal</p>
            <p>Total calls : 11</p>
            <p>Call Duration : 22 min</p>
        </div>
        <button className='logoutbutton'>
            Logout
        </button>
    </ProfileCardWrapper>
  )
}

export default ProfileCard