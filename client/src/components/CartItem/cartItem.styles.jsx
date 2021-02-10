import styled, { css } from "styled-components";
import { motion } from 'framer-motion';

const cartItemDetailStyles = css`
    font-size: 16px;
`

export const CartItemWrp = styled(motion.div)`
    width: 100%;
    display: flex;
    height: auto;
    margin-bottom: 15px;
    background-color: #f3f3f3;
    border-radius: 12px;
    padding: 10px;
`

export const CartItemImage = styled.img`
    width: 100%;
    border-radius: 12px;
    max-width: 20%;
    height: 85px;
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