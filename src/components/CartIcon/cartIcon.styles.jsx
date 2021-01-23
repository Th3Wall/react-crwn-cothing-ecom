import styled from "styled-components";
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

export const CartIconToggle = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`

export const ShoppingIcon = styled(ShoppingBagIcon)`
    width: 30px;
    height: 30px;
`