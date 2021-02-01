import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { SignInOutWrapper } from './signInOut.styles';

const SignInOut = () => {
    return (
        <SignInOutWrapper>
            <SignIn />
            <SignUp />
        </SignInOutWrapper>
    )
}

export default SignInOut;
