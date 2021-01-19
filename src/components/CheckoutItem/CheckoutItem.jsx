import { connect } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';
import './checkoutItem.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item' />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
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