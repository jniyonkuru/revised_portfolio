import { Typography, Box, Button } from "@mui/material";
import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
  errorInfo: any;
  errorCount: number;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }
  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.Logger(error, errorInfo);
    this.setState((prevState: any) => ({
      errorInfo: errorInfo,
      errorCount: prevState.errorCount + 1,
    }));
  }

  Logger = (error: any, errorInfo: any) => {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  };

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    });
  };
  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.state.errorCount < 3) {
        return (
          <Box>
            <Typography variant="h5" color="error">
              The applictions has encounterted mutiple errors. Please try again
              later. please refresh the page .
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={window.location.reload}
            >
              Refresh Page
            </Button>
          </Box>
        );
      }

      return (
        <Box>
          <Box>
            <Typography variant="h5" color="error">
              Something went wrong. Please try again later.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.resetError}
            >
              Try Again
            </Button>
          </Box>

          {import.meta.env.NODE_ENV === "development" && (
            <Box>
              <Typography variant="h6" color="error">
                Error: {this.state.error && this.state.error.toString()}
              </Typography>
              <Typography variant="body1" color="error">
                Stack Trace:{" "}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </Typography>
            </Box>
          )}
        </Box>
      );
    }
    return this.props.children;
  }
}


export default ErrorBoundary