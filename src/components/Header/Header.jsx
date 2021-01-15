import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='shop'>
                    SHOP
                </Link>
                <Link className='option' to='contacts'>
                    CONTACTS
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>SIGN-OUT</div>
                ) : (
                    <Link className='option' to='login'>
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header
