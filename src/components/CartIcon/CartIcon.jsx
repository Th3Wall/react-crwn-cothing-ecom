import './cartIcons.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartDropdown}) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);
