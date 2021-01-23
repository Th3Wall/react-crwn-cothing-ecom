import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './formInput.styles';

const FormInput = ({ handleChange, label, ...otherInputProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherInputProps} />
        {label ? (
            <FormInputLabel className={otherInputProps.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
        ) : null}
    </GroupContainer>
);

export default FormInput;