import styled from "styled-components";
import Button from "../Button/Button";

export const CartWrp = styled.div`
    position: fixed;
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 70px;
    background-color: white;
    box-shadow: -4px 0px 23px -8px rgba(173,173,173,0.89);
    top: 0;
    right: 0;
    z-index: 5;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
`

export const CartItemsWrp = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 20px;
`

export const CheckoutButton = styled(Button)`
    margin-top: auto;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CloseCart = styled.div`
    position: fixed;
    top: 25px;
    right: 50px;
    cursor: pointer;
`