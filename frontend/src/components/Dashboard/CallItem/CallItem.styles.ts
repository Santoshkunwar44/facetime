import {styled } from "styled-components"


type CallItemWrappperPropType={
    isSuccess:boolean
}

export const CallItemWrappper  = styled.div<CallItemWrappperPropType>`
    display: flex;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    /* background-color: var(--light_bg); */
    border-bottom: 1px solid #28346140;
    padding: 1rem;
    cursor: pointer;
    .callItemLeft{
        display: flex;
        flex: 5;
        gap: 10px;
        .callUserProfile{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            /* border: 2px solid  var(--primary_color);  */
            padding: 2px;
        }
        .mainInfo{
            display: flex;
            flex-direction: column;
            .callTimeAgo{
                font-size: 10px;
                letter-spacing: 1px;
                color: rgba(128, 128, 128, 0.52);
            }
            .callUserName{
                font-weight: 500;
                font-size: 14px;
                letter-spacing: 1px;
                /* color: ${(props)=>props.isSuccess ? "#37e710":"red"} ; */
                color: var(--primary_color);
            }
        }
    }
.midBox{
    flex:5;
    .incomingBox{
        display: flex;
        align-items: center;
        gap: 10px;
        p{
            font-size: 13px;
            letter-spacing: 1px;
            color: ${(props)=>props.isSuccess ? "rgba(55, 231, 16, 0.69)":"rgba(255, 0, 0, 0.73)"};
        }
        svg{
            font-size: 0.8rem !important;
            color: ${(props)=>props.isSuccess ? "rgba(55, 231, 16, 0.69)":"rgba(255, 0, 0, 0.73)"};

        }
    }
}
.iconBox{
    flex: 2;
    display: flex;
    justify-content: flex-end;
    .videoTypeIcon{
        
        color: var(--primary_color);
    }
}
`