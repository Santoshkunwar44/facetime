import {styled} from "styled-components"
export const MainContentWrapper = styled.div`
flex: 6;
/* background-color: var(--lightBg); */
border-radius: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
.CallLogHeader{
    height: 80px;
    background-color: var(--light_bg);
    padding: 1rem;
    display: flex;
    align-items:  center ;
    border-radius: 10px;
    h2{
        letter-spacing: 1px;
        color: var(--primary_color);
        font-weight: 500;

    }
}
.callLogsContainer{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
`