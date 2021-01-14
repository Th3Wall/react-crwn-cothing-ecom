import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './signIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and your password.</span>
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
                    <div className="buttons">
                        <Button type="submit">
                            Sign In
                        </Button>
                        <Button
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In with Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
