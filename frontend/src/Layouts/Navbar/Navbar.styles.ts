import {styled} from "styled-components";

export const NavbarWrapper = styled.div`

width:100%;
height:100px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 1rem;
.appName{
    color: var(--primary_color);
    letter-spacing:2px;
}

.navRight{
    display:flex;
    align-items: center;
    gap: 2rem;
    .navLinks{
        display: flex;
        gap: 1rem;
        font-size: 14px;

        align-items: center;
        letter-spacing: 1.5px;
        color: gray;
    }
    .navButton{
        display: flex;
        align-items: center;
        gap: 1rem;
        button{
            height: 45px;
            padding: 0 2rem;
            border-radius: 25px;
            border: none;
            outline: none;
            font-size: 16px;
            letter-spacing: 1px;
            color: white;
            background-color: var(--primary_color);
        }
    }
}

`