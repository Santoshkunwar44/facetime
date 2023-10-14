import {styled} from "styled-components"

export const UserItemWrapper = styled.div`

display: flex;
justify-content: space-between;
align-items: center;

.userLeft{

    .userInfo{
        .username{
            color: var(--primary_color);
            letter-spacing: 1px;
        }
        .userEmail{
            color: gray;
            font-size: 12px;
            letter-spacing: 1px;
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