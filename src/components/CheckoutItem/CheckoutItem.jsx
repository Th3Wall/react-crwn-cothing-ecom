import { connect } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';
import { CartProduct, CartProductName, CartProductPrice, CartProductQuantity, CartProductQuantityWrp, ImageContainer, QuantityArrow, RemoveItem } from './checkoutItem.styles';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (
        <CartProduct>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <CartProductName>{name}</CartProductName>
            <CartProductQuantityWrp>
                <QuantityArrow
                    onClick={() => removeItem(cartItem)}
                >
                    &#10094;
                </QuantityArrow>
                <CartProductQuantity>{quantity}</CartProductQuantity>
                <QuantityArrow
                    onClick={() => addItem(cartItem)}
                >
                    &#10095;
                </QuantityArrow>
            </CartProductQuantityWrp>
            <CartProductPrice>${price}</CartProductPrice>
            <RemoveItem
                onClick={() => clearItem(cartItem)}
            >
                &#10005;
            </RemoveItem>
        </CartProduct>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);