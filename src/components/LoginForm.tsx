//third party packages
import { useEffect, useState } from "react";
import { useTheme, Theme } from "@mui/material/styles";
import {
  Box,
  Modal,
  Backdrop,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//local packages
import { useLogin } from "../ hooks/users";

interface LoginData {
  username: string;
  password: string;
}

interface Props {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  closeWithX: () => void;
}

const generateSytle = (theme: Theme) => {
  return {
    width: { xs: 300, md: 400 },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    bgcolor: theme.palette.background.default,
    padding: 4,
    outline: 0,
    borderRadius: "5px",
    color: theme.palette.text.primary,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.contrastText,
        borderRadius: theme.shape.borderRadius,
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
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      WebkitTextFillColor: "#000000",
      transition: "background-color 5000s ease-in-out 0s",
    },
  };
};
const LoginForm = ({ open, handleClose, closeWithX }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const { mutate: login, isPending, isSuccess } = useLogin();
  const navigate = useNavigate();
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<LoginData> = (data: LoginData) => {
    login(data);
  };

  useEffect(() => {
    if (isSuccess) {
        navigate("/dashboard", { replace: true });
        reset();
        handleClose();
    }
  }, [isSuccess, handleClose]);


  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="login-modal"
      aria-describedby="login-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 1000,
        },
      }}
    >
      <Box
        sx={{ ...generateSytle(theme) }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
    
      >
        <IconButton
          sx={{ position: "absolute", top: 2, right: 2 }}
          onClick={closeWithX}
        >
          <ClearIcon fontSize="small"></ClearIcon>
        </IconButton>
        <Typography>Login</Typography>
        <Controller
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Username"
              fullWidth
              size="small"
              margin="dense"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Password"
              fullWidth
              size="small"
              margin="dense"
              type={showPassword ? "text" : "password"}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        <Button
          sx={{ backgroundColor: "primary.light", mt: 1,color:"text.primary" }}
          type="submit"
          disabled={isPending || isSubmitting}
        >
          {isPending || isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginForm;
