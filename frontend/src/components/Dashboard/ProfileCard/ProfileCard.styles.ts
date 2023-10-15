import {styled} from "styled-components"

export const ProfileCardWrapper = styled.div`

display: flex;
flex-direction: column;
gap: 1rem;
align-items: flex-start;
padding: 10px;
.mainInfo{
    display: flex;
    gap: 0.8rem;
    margin-bottom: 1rem;
    .profilePicture{
        width: 45px ;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--primary_color);
        padding: 2px;
    }
    .profileUsername{
        letter-spacing: 1px;
        color: var(--primary_color);
    }
    .profileEmail{
        color: gray;
        font-size: 13px;
        letter-spacing: 1px;
           color: rgba(128, 128, 128, 0.52);
    }
}
.creditBox{
    background-color: transparent;
    outline: none;
    border:1px solid var(--primary_color);
    height: 38px;
    font-size: 13px;
    letter-spacing: 1px;
    color: var(--primary_color);
    border-radius: 25px;
    padding: 0 1rem;
}
.userDescBox{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
        font-size: 13px;
        color: gray;
        letter-spacing: 1px;
           color: rgba(128, 128, 128, 0.52);
    }
}
.logoutbutton{
    height: 40px;
    font-size: 14px;
    letter-spacing: 2px;
    color: white;
    border: none;
    outline: none;
    border-radius: 25px;
    background-color: var(--primary_color);
    width: 120px;
    text-transform: uppercase;
}
`