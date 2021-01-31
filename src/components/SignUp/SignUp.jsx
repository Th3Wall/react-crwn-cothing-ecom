import React from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { SignUpSubtitle, SignUpTitle, SignUpWrapper } from "./signUp.styles";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import { useState } from "react";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({ email, password, displayName });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <SignUpWrapper>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <SignUpSubtitle>Sign up with your email and password.</SignUpSubtitle>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpWrapper>
    );
};

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);