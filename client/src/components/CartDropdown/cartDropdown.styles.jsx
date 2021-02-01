import styled from "styled-components";
import Button from "../Button/Button";

export const CartWrp = styled.div`
    position: absolute;
    width: 350px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

export const CartItemsWrp = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

export const CheckoutButton = styled(Button)`
    margin-top: auto;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`