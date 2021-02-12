import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { SignInOutWrapper } from './signInOut.styles';

const SignInOut = () => {
    return (
        <SignInOutWrapper
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50px' }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <SignIn />
            <SignUp />
        </SignInOutWrapper>
    )
}

export default SignInOut;
