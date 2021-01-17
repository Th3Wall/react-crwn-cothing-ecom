import './cartIcons.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;
