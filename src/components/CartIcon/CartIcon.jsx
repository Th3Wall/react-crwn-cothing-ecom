import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { CartIconToggle, ItemCount, ShoppingIcon } from './cartIcon.styles';

const CartIcon = ({toggleCartDropdown, cartItemsCount}) => (
    <CartIconToggle onClick={toggleCartDropdown}>
        <ShoppingIcon />
        <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconToggle>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
