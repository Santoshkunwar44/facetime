import {styled} from "styled-components"

export const UserReviewWrapper = styled.div`

padding: 1.5rem;
display: flex;
flex-direction: column;
gap: 1rem;
background-color: rgba(3, 89, 231, 0.87);
border-radius: 10px;
.reviewtitle{
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 600;
}
.reviewDesc{
    color: rgb(121,162,239);
    font-size: 14px;
    letter-spacing: 1px;
}
`