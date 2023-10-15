import {styled} from "styled-components";

export const BannerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
height: calc(100vh - 100px);
position: relative;
justify-content: center;
.bannerBigText{
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 2px;
}
.bannerDesc{
    font-size: 16px;
    line-height: 30px;

    letter-spacing: 2px;
    text-align: center;

}
.buttonWrapper{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    button{
        height: 45px;
        border: none;
        outline: none;
        padding: 0 2rem;
        border-radius: 25px;
        font-size: 15px;
        letter-spacing: 1px;
        color: var(--primary_color);
        border: 2px solid var(--primary_color);
        background-color: transparent;
        cursor: pointer;
    }
.dark{
        background-color: var(--primary_color);
        color: white !important;
    }
}
`