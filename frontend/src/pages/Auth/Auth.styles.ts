import {styled} from "styled-components"

export const AuthWrapper =styled.div`

width:100%;
padding: 3rem;
height: 100vh;
.authContainer{
    border-radius: 15px;
    background-color: var(--light_bg);
    height: 100%;
    display: flex;
    overflow: hidden;

    .sideContent{
        background-color: var(--primary_color);
        flex: 4;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: space-between;
        .headerBox{

            display: flex;
            .logoBox{
                display: flex;

                align-items: center;
                gap: 10px;

                svg{
                    font-size: 1.7rem;
                }
                h1{
                    font-weight: 600;
                    font-size: 1.8rem;
                }
            }
        }
        .mainSidebarContent{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .bigText{
                font-size: 1.4rem;
                letter-spacing: 2px;
                line-height: 55px;
            }
            .mainDesc{
                letter-spacing: 2px;
                line-height: 25px;
                font-size: 13px;

            }
        }
    }
    .mainContent{
        flex:8;
        padding: 2rem;
        
    }
}


`