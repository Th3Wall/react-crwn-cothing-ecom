import React, {useState} from "react";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { connect } from "react-redux";
import {
	SignInButtonsWrp,
	SignInSubtitle,
	SignInTitle,
	SignInWrapper,
} from "./signIn.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const { email, password } = userCredentials;
	
	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({
			...userCredentials,
			[name]: value,
		});
	};

	return (
		<SignInWrapper>
			<SignInTitle>I already have an account</SignInTitle>
			<SignInSubtitle>
				Sign in with your email and your password.
			</SignInSubtitle>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					label="Email"
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					handleChange={handleChange}
					required
				/>
				<SignInButtonsWrp>
					<Button type="submit">Sign In</Button>
					<Button type="button" onClick={googleSignInStart} isGoogleSignIn>
						Sign In with Google
					</Button>
				</SignInButtonsWrp>
			</form>
		</SignInWrapper>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);