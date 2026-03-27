//third party packages
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
// import { useTheme } from '@mui/material/styles';


const Spinner: React.FC = () => {
    // const theme=useTheme()
    return (
        <CircularProgress color="primary" size={50} />
    )
}

export default Spinner