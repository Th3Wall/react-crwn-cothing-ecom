import styled from "styled-components";

export const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-top: 3em;
    }
`

export const SignUpTitle = styled.h2`
    margin: 10px 0;
`

export const SignUpSubtitle = styled.span`
    font-size: 18px;
`