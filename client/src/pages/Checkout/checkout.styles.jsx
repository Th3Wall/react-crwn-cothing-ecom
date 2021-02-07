import styled from "styled-components";

export const CheckoutWrp = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin-left: auto;
        margin-top: 3em;
        margin-bottom: 5em;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 0 10px;
    }
`

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const CheckoutHeaderBlock = styled.span`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 1024px) {
        width: 22%;

        &:last-child {
            width: 12%;
        }
    }
`

export const CheckoutTotal = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`

export const WarningLabel = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`