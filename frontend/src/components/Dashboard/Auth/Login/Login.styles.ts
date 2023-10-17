import {styled} from "styled-components"

export const  LoginWrapper = styled.div`

width: 70%;
margin: auto;
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 2rem;
.headerText{
  letter-spacing: 1px;
    color: var(--primary_color);
}
.loginInputBoxWrapper{
    display: flex;
    gap: 2rem ;
    flex-direction: column;
    .inputBox{
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex: 1;
        label{
                 font-size: 13px;
        letter-spacing: 1px;
        color: var(--primary_color);
        }

        input{
            height: 60px;
            width: 100%;
            border: 1px solid var(--primary_color);
              background-color: #161b3c;
              outline: none;
              padding: 0 10px;
              border-radius: 5px;
              color: var(--primary_color);
              letter-spacing: 1px;
            
                &::placeholder{
                    color: var(--primary_color);
                }
        }
    }
}
.loginButton{
      height: 55px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    outline: none;
    background-color: var(--primary_color);
    cursor: pointer;
}
.registerButton{
    background-color: transparent !important;
    border: 1px solid var(--primary_color) !important;
    color: var(--primary_color);
    width: 100%;
}
.forgotPasswordText{
    color: var(--primary_color);
    margin: auto;
    display: block;
    letter-spacing: 1px;
    cursor: pointer;
}
`