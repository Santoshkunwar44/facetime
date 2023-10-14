import {styled} from "styled-components";

export const FlyingAvatarWrapper = styled.div`

    position: absolute;
    width: 100% ;
    height: 100%;

    .imgBox{
        position: relative;

        img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--primary_color);
            padding:3px;
            opacity: 0.4;
        }
    }
`