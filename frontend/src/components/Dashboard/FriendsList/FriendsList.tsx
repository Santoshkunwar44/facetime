import UserItem from "../UserItem/UserItem"
import { FriendListWrapper } from "./FriendList.styles"

const FriendsList = () => {
  return (
    <FriendListWrapper>
      <div className="friendListHeader">
      <h1>friends</h1>

      </div>
      <div className="friendsWrapper">
        <UserItem/>
        <UserItem/>
        <UserItem/>
        <UserItem/>
      </div>
    </FriendListWrapper>
  )
}

export default FriendsList