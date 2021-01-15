import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './signInOut.scss';

const SignInOut = () => {
    return (
        <div className="sign-in-out">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInOut;
