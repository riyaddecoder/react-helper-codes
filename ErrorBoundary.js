import React from "react";
import { sendRequest } from "../../api/rootApi";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Updating state to show SWW/Fallback UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Loggin the error
      let api = `${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_API_VERSION}/container/log/react-error`
      sendRequest("post",api , {
          module : 'Marketing',
          error : error,
          errorInfo : errorInfo.componentStack
      })
    }
  
    render() {
      if (this.state.hasError) {
        // Rendering fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;
