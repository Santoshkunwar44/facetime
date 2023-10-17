import {styled} from "styled-components"

export const FriendListWrapper=styled.div`
/* background-color: var(--light_bg); */
padding: 1.5rem;
flex: 3;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 1rem;
.friendListHeader{
    h1{
        color: var(--primary_color);
        text-transform: capitalize;
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 1.5rem;

    }
}
.friendsWrapper{

    display: flex;
    flex-direction: column;
    gap: 0.4rem;

}
`