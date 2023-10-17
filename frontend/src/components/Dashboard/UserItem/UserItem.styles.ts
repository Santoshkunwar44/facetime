import {styled} from "styled-components"

export const UserItemWrapper = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 1rem  ;
  border-bottom: 1px solid #28346140;


.userLeft{
    display: flex;
    gap: 10px;
    align-items: center;
.userImg{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary_color);
    padding: 2px;
}
    .userInfo{
        .username{
            color: var(--primary_color);
            letter-spacing: 1px;
            font-size: 14;
        }
        .userEmail{
       
            letter-spacing: 1px;
             font-size: 10px;
                letter-spacing: 1px;
                color: rgba(128, 128, 128, 0.52);
        }
    }

}
.actionBox{
    display: flex;
    gap: 5px;
    .videoTypeIcon{
        color: var(--primary_color);
    }
}



`