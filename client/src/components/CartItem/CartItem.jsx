import { memo } from 'react';
import {
    CartItemDetails,
    CartItemImage,
    CartItemName,
    CartItemPrice,
    CartItemWrp
} from './cartItem.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity }, variants}) => {
    return (
        <CartItemWrp
            variants={variants}
        >
            <CartItemImage src={imageUrl} alt="cart-item"/>
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice>{quantity} x ${price}</CartItemPrice>
            </CartItemDetails>
        </CartItemWrp>
    )
}

export default memo(CartItem);
