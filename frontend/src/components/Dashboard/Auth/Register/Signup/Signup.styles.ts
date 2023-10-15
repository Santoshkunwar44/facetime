import {styled} from "styled-components"

export const SignupWrapper = styled.div`

width:70%;;
display: flex;
flex-direction: column;
gap: 2rem;
margin: auto;

.headerText{
    letter-spacing: 1px;
    color: var(--primary_color);
}

.signupInpuBoxWrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}
.dualInputBox{
    display: flex;
    width: 100%;
    gap: 2rem;
    height: 80px;
    .inputItem{
        width: 100%;
        height: 100%;
    }
 
}
.inputItem{
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
    height: 80px;
    label{
        font-size: 13px;
        letter-spacing: 1px;
        color: var(--primary_color);
    }
    input ,select{
        padding: 0 10px;
        background-color: #161b3c;
        width: 100%;
        border: 1px solid var(--primary_color);
        outline: none;
        flex: 1;
        height: 60px;
        border-radius: 4px;
        color: var(--primary_color);
        letter-spacing: 1px;
        &::placeholder{
            letter-spacing: 1px;
            color: var(--primary_color);
        }
    }
    
}
.getStartedButton{
    height: 55px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    outline: none;
    background-color: var(--primary_color);
}
`