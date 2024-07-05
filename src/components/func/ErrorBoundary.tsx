import React from "react";

class ErrorBoundary extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // send error to somewhere here
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>Oops !!! There occur something bad</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary