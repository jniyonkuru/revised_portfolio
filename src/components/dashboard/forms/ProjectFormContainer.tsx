import React from 'react'
import Box from '@mui/material/Box';


interface IProps {
    children:React.ReactNode
}

const ProjectFormContainer:React.FC<IProps>=({children}:IProps) => {

    return (
        <Box  sx={(theme) => ({
            width: "400px",
            backgroundColor: theme.palette.background.default,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            outline: 0,
            borderRadius: 1,
            padding: theme.spacing(2, 3),
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: theme.palette.secondary.contrastText,
                    borderRadius: 1,
                },
                "&:hover fieldset": {
                    borderColor: theme.palette.secondary.contrastText,
                },
                "&.Mui-focused fieldset": {
                    borderColor: theme.palette.secondary.contrastText,
                },
            },
            "& .MuiInputLabel-root": {
                color: theme.palette.text.primary,
                "& .Mui-focused":{
                    color: theme.palette.text.primary,
                }
            },
            "& .MuiButton-contained": {
                width: "fit-content",
                color: theme.palette.primary,
                borderRadius: 1,
            },
        })}>
            {children}
        </Box>
    )
}

export default ProjectFormContainer;