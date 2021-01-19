import './cartIcons.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartDropdown, cartItemsCount}) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = state => ({
    cartItemsCount: selectCartItemsCount(state)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
