import {styled} from "styled-components"
export const AudioCallWrapper = styled.div`

width: 100%;
height: 100vh;
display: grid;
place-items: center;
.callContainer{
    width: 95%;;
    height: 100%;
    padding: 2rem  ;
    max-width: 1200px;
    margin: auto;
    border-radius: 2rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    
    .callUserWrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80%;
        gap: 1rem;
        .bigUserBox{
            border-radius: 1rem;
            width: 100%;
            height: 60%;
            display: grid;
            place-items: center;
            padding: 6px;
            background-color: var(--light_bg);
        }
        .smallUserBox{
            background-color: var(--light_bg);
            border-radius: 1rem;
            height: 40%;
            width: 40%;
            display: grid;
            place-items: center;;
            padding: 6px;
            overflow: hidden;
            align-self: flex-end;
            video{
                width: 95%;
                height: 95%;
                border-radius: 1rem;
                object-fit: cover;
            }
            img{
                width:100%;
                height:100%;
                border-radius:50%;
                object-fit:cover;
            }
        }
        .userBox{
            width: 150px;
            height:150px;
            border-radius: 50%;
            border: 4px solid var(--primary_color);
            padding: 8px;
            
            img{
                width:100%;
                height:100%;
                border-radius:50%;
                object-fit:cover;
            }
        }
        .isSpeaking{
            border: 2px solid var(--primary_color);
        }
    }
    .callActionBox{
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;

        justify-content: center;
        flex-direction: column;
        gap: 15px;

        .durationTime{
            color: var(--primary_color);
            font-size: 18px;
            letter-spacing: 2px;
        }
        .actionBottons{
            display: flex;
            gap: 1rem;


            .actionIconItem{
                cursor: pointer;
                display: grid;
                place-items: center;
                background-color: red;
                width: 50px;
                height: 50px;   
                border-radius: 50%;
                svg{
                    width: 20px;
                    height: 20px;
                }
            }
            .micBtn{
                background-color: var(--primary_color);
            }
        }
    }
        
}



`


export const CallingWrapper = styled.div`
    width: 95%;;
    height: 90%;
    padding: 2rem  ;
    max-width: 1200px;
    margin: auto;
    border-radius: 2rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    background-color: var(--light_bg);

    .callUserBox{
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items:  center;
        justify-content: center;
        .userBox{
            width: 150px;
            height:150px;
            border-radius: 50%;
            border: 4px solid var(--primary_color);
            padding: 8px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
        }
        .userBoxContent{
            .callingText{
                color: var(--primary_color);
                letter-spacing: 1px;
                font-size: 15px ;
            }
        }
    }
    .callActionBox{
        height: 20%;
        display: flex;
        justify-content: center;
           .actionBottons{
            display: flex;
            gap: 1rem;


            .actionIconItem{
                cursor: pointer;
                display: grid;
                place-items: center;
                background-color: red;
                width: 50px;
                height: 50px;   
                border-radius: 50%;
                svg{
                    width: 20px;
                    height: 20px;
                }
            }
            .micBtn{
                background-color: var(--primary_color);
            }
        }
        
    }


`


export const IncomingWrapper=styled.div`

  width: 95%;;
    height: 90%;
    padding: 2rem  ;
    max-width: 1200px;
    margin: auto;
    border-radius: 2rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    background-color: var(--light_bg);

    .callUserBox{
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items:  center;
        justify-content: center;
        .userBox{
            width: 150px;
            height:150px;
            border-radius: 50%;
            border: 4px solid var(--primary_color);
            padding: 8px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
        }
        .userBoxContent{
            .callingText{
                color: var(--primary_color);
                letter-spacing: 1px;
                font-size: 15px ;
            }
        }
    }
    .callActionBox{
        height: 20%;
        display: flex;
        justify-content: center;
           .actionBottons{
            display: flex;
            gap: 1rem;


            .actionIconItem{
                cursor: pointer;
                display: grid;
                place-items: center;
                background-color: red;
                width: 50px;
                height: 50px;   
                border-radius: 50%;
                svg{
                    width: 20px;
                    height: 20px;
                
                }
            }
            .acceptButton{
                background-color: #37e710;
              
            }
        }
        
    }

`