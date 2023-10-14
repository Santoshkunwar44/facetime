import {styled } from "styled-components"


type CallItemWrappperPropType={
    isSuccess:boolean
}

export const CallItemWrappper  = styled.div<CallItemWrappperPropType>`
    display: flex;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--light_bg);
    padding: 1rem;
    border-radius: 5px;
    .callItemLeft{
        display: flex;
        gap: 10px;
        .callUserProfile{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid  ${(props)=>props.isSuccess? "#37e710":"red"} ;
            padding: 2px;
        }
        .mainInfo{
            display: flex;
            flex-direction: column;
            .callTimeAgo{
                font-size: 11px;
                color: gray;
                letter-spacing: 1px;
            }
            .callUserName{
                font-weight: 500;
                letter-spacing: 1px;
                color: ${(props)=>props.isSuccess ? "#37e710":"red"} ;
            }
        }
    }

.videoTypeIcon{
    color: var(--primary_color);
}
`