import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrappedComponent {...otherProps} />
}

export default WithSpinner;
