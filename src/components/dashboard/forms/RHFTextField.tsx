import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface Props {
  name: string;
  control: any;
  label: string;
  helperText?: string;
  rules?: any;
  multiline?: boolean;
  rows?: number;
}

export default function RHFTextField({
  name,
  control,
  label,
  helperText,
  rules,
  multiline,
  rows,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          multiline={multiline}
          rows={rows}
          fullWidth
          size="small"
          error={!!fieldState.error}
          helperText={fieldState.error?.message || helperText}
        />
      )}
    />
  );
}
