import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

function Header({currentUser, hidden}) {
    return (
        <HeaderContainer>
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
                    <OptionLink as='div' onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps)(Header);