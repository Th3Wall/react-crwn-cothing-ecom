import { BaseButton } from './button.styles';

const Button = ({ children, ...otherProps }) => {
    return (
        <BaseButton {...otherProps}>
            {children}
        </BaseButton>
    )
}

export default Button
