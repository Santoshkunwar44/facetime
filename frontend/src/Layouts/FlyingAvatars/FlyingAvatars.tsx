import { FlyingAvatarWrapper } from "./FlyingAvatars.styles"

export const FlyingAvatars = () => {
  return (
    <FlyingAvatarWrapper>
        <div className="imgBox">

        {
            users.map(user=><img  src={user}/>)
        }
        </div>
        
    </FlyingAvatarWrapper>
  )
}

const users=[
    "https://images.pexels.com/photos/15637510/pexels-photo-15637510/free-photo-of-illuminated-face-of-a-smiling-woman-at-night.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/9869646/pexels-photo-9869646.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8067738/pexels-photo-8067738.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/18659922/pexels-photo-18659922/free-photo-of-summer-in-germany.jpeg?auto=compress&cs=tinysrgb&w=1200",
 
    
]
