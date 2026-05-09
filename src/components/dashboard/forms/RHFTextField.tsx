import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { TextField } from '@mui/material';

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  helperText?: string;
  rules?: RegisterOptions<T, Path<T>>;
  multiline?: boolean;
  rows?: number;
  type?: string;
}

export default function RHFTextField<T extends FieldValues>({
  name,
  control,
  label,
  helperText,
  rules,
  multiline,
  rows,
  type,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          multiline={multiline}
          rows={rows}
          fullWidth
          size="small"
          error={!!fieldState.error}
          helperText={fieldState.error?.message || helperText}
          // Date inputs always show a value, so keep the label shrunk.
          slotProps={
            type === 'date' ? { inputLabel: { shrink: true } } : undefined
          }
        />
      )}
    />
  );
}
