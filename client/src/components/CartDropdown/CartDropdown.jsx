import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import {
    CartItemsWrp,
    CartWrp,
    CheckoutButton,
    EmptyMessage,
    CloseCart
} from './cartDropdown.styles';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.1,
            delayChildren: 0.4
        }
    }
}

const item = {
    hidden: { opacity: 0,  y: '-20px' },
    show: { opacity: 1, y: '0px' }
}

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartWrp
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
        >
            <CloseCart onClick={() => 
                dispatch(toggleCartDropdown())
            }>
                &#10005;
            </CloseCart>
            <CartItemsWrp
                variants={container}
                initial="hidden"
                animate="show"
            >
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} variants={item} />)
                    ) : (
                        <EmptyMessage>You cart is empty</EmptyMessage>
                    )
                }
            </CartItemsWrp>
            <CheckoutButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDropdown())
            }}>
                Go to Checkout
            </CheckoutButton>
        </CartWrp>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));