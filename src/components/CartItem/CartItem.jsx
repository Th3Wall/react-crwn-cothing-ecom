import { CartItemDetails, CartItemImage, CartItemName, CartItemPrice, CartItemWrp } from './cartItem.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity }}) => {
    return (
        <CartItemWrp>
            <CartItemImage src={imageUrl} alt="cart-item"/>
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice>{quantity} x ${price}</CartItemPrice>
            </CartItemDetails>
        </CartItemWrp>
    )
}

export default CartItem;
