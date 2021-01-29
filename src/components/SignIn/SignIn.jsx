import React from 'react'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { connect } from "react-redux";
import { SignInButtonsWrp, SignInSubtitle, SignInTitle, SignInWrapper} from './signIn.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
        return (
            <SignInWrapper>
                <SignInTitle>I already have an account</SignInTitle>
                <SignInSubtitle>Sign in with your email and your password.</SignInSubtitle>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name='email'
                        label='Email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name='password'
                        label='Password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <SignInButtonsWrp>
                        <Button type="submit">
                            Sign In
                        </Button>
                        <Button
                            type='button'
                            onClick={googleSignInStart}
                            isGoogleSignIn
                        >
                            Sign In with Google
                        </Button>
                    </SignInButtonsWrp>
                </form>
            </SignInWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
