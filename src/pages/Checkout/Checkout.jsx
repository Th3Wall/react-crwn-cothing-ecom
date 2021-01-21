import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.scss';

const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <div className="text-warning">
                *Please use the following test credit card for payments*
                <br/>
                5555 5555 5555 4444 - Exp: 11/23 - CVV: 123
            </div>
            <StripeButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(
    mapStateToProps
)(Checkout);
