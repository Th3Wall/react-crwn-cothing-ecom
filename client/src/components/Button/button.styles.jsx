import styled, { css } from 'styled-components';

const baseButtonStyles = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const googleButtonStyles = css`
    background-color: #4285f4;
    color: white;
    margin: 0 10px;

    &:hover {
        background-color: #2876f9;
        border: 1px solid transparent;
    }
`

export const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) return googleButtonStyles;

    return props.inverted ? invertedButtonStyles : baseButtonStyles;
}

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    ${getButtonStyles}
`