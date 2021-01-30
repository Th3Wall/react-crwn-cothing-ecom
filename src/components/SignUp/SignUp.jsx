import React from 'react'
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { SignUpSubtitle, SignUpTitle, SignUpWrapper } from './signUp.styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUpStart({email, password, displayName});
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <SignUpWrapper>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <SignUpSubtitle>Sign up with your email and password.</SignUpSubtitle>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
            </SignUpWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(
    null,
    mapDispatchToProps
)(SignUp);