import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {
    CheckoutHeader,
    CheckoutHeaderBlock,
    CheckoutTotal,
    CheckoutWrp,
    WarningLabel
} from './checkout.styles';

const Checkout = ({cartItems, total}) => {
    return (
        <CheckoutWrp
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50px' }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <CheckoutHeader>
                <CheckoutHeaderBlock><span>Product</span></CheckoutHeaderBlock>
                <CheckoutHeaderBlock><span>Description</span></CheckoutHeaderBlock>
                <CheckoutHeaderBlock><span>Quantity</span></CheckoutHeaderBlock>
                <CheckoutHeaderBlock><span>Price</span></CheckoutHeaderBlock>
                <CheckoutHeaderBlock><span>Remove</span></CheckoutHeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <CheckoutTotal><span>Total: ${total}</span></CheckoutTotal>
            <WarningLabel>
                *Please use the following test credit card for payments*
                <br/>
                5555 5555 5555 4444 - Exp: 11/23 - CVV: 123
            </WarningLabel>
            <StripeButton price={total} />
        </CheckoutWrp>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(
    mapStateToProps
)(Checkout);
