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
import { X, Eye, EyeOff } from "lucide-react";
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
    bgcolor: theme.palette.background.paper,
    padding: 4,
    outline: 0,
    borderRadius: 2,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[6],
    color: theme.palette.text.primary,
    "& .MuiOutlinedInput-root": {
      borderRadius: 12,
      color: theme.palette.text.primary,
      "& fieldset": {
        borderColor: theme.palette.secondary.contrastText,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.contrastText,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.contrastText,
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary,
      "&.Mui-focused": {
        color: theme.palette.text.primary,
      },
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
      WebkitTextFillColor: theme.palette.text.primary,
      caretColor: theme.palette.text.primary,
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
          <X size={20} />
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
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
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
          fullWidth
          variant="contained"
          sx={(theme) => ({
            mt: 2,
            borderRadius: "12px",
            py: 1,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.text.primary,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabledBackground,
              color: theme.palette.text.disabled,
            },
          })}
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
