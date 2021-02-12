import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';
import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

function Header({currentUser, hidden, signOutStart}) {
    return (
        <HeaderContainer
            initial={{ opacity: 0, y: '-50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50px' }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contacts'>
                    CONTACTS
                </OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={signOutStart}>
                        SIGN-OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/login'>
                        SIGN IN
                    </OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartDropdownHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);