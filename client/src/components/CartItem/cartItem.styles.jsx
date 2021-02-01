import styled, { css } from "styled-components";

const cartItemDetailStyles = css`
    font-size: 16px;
`

export const CartItemWrp = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`

export const CartItemImage = styled.img`
    width: 30%;
    border-radius: 12px;
`

export const CartItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

export const CartItemName = styled.span`
    ${cartItemDetailStyles}
`
export const CartItemPrice = styled.span`
    ${cartItemDetailStyles}
`