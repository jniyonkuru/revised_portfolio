import { Button } from '@mui/material';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import React, { useEffect, useRef } from 'react';

interface IProps<T extends FieldValues> {
  control: Control<T>;
  setImageUrl: (url: string) => void;
  rules?: RegisterOptions<T, Path<T>>;
  name: Path<T>;
  children: React.ReactNode;
}

const ImageInput = <T extends FieldValues>({
  control,
  setImageUrl,
  name,
  rules,
  children,
}: IProps<T>) => {
  // Track the last object URL we created so we can revoke it before
  // replacing it (and on unmount), preventing a memory leak.
  const lastObjectUrl = useRef<string>('');

  useEffect(() => {
    return () => {
      if (lastObjectUrl.current) {
        URL.revokeObjectURL(lastObjectUrl.current);
      }
    };
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange } }) => (
        <Button
          variant="contained"
          disableElevation
          component="label"
          color="primary"
        >
          {children}
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file: File | undefined = e.target.files?.[0];
              if (file) {
                if (lastObjectUrl.current) {
                  URL.revokeObjectURL(lastObjectUrl.current);
                }
                const url = URL.createObjectURL(file);
                lastObjectUrl.current = url;
                setImageUrl(url);
                onChange(file);
              }
            }}
          />
        </Button>
      )}
    />
  );
};

export default ImageInput;
