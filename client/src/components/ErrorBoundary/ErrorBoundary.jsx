import { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        const { hasErrored } = this.state;
        const { children } = this.props;
        
        if (hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/oCkEbrA.png' />
                    <ErrorImageText>This Page is Lost in the Wind</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return children;
    }
}

export default ErrorBoundary;