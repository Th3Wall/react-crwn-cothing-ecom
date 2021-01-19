import './cartDropdown.scss';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    ) : (
                        <span className="empty-message">You cart is empty</span>
                    )
                }
            </div>
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDropdown())
            }}>
                Go to Checkout
            </Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));