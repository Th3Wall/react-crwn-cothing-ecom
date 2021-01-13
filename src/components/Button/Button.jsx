import './button.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className='button' {...otherProps} >
            {children}
        </button>
    )
}

export default Button
