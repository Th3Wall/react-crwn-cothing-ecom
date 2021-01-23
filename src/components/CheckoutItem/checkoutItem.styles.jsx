import styled, { css } from "styled-components";

const cartColumn = css`
    width: 23%;
`

export const CartProduct = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }
`

export const CartProductName = styled.span`
    ${cartColumn}
`

export const CartProductPrice = styled.span`
    ${cartColumn}
`

export const CartProductQuantity = styled.span`
    margin: 0 10px;
`

export const CartProductQuantityWrp = styled.div`
    display: flex;
    ${cartColumn}
`

export const QuantityArrow = styled.div`
    cursor: pointer;
`

export const RemoveItem = styled.div`
    padding-left: 12px;
    cursor: pointer;
`