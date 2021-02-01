import styled from "styled-components";

export const SignInWrapper = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const SignInTitle = styled.h2`
    margin: 10px 0;
`

export const SignInSubtitle = styled.span`
    font-size: 18px;
`

export const SignInButtonsWrp = styled.div`
    display: flex;
    justify-content: flex-start;
`