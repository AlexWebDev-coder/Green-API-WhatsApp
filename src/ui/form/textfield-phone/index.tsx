import { FC } from "react";
import { IProps } from "./types";
import { TextField } from "@mui/material";

const FormTextFieldPhone: FC<IProps> = (props) => {
  const { value, onChange, placeholder, name } = props;

  return (
    <TextField
      placeholder={placeholder}
      value={value}
      name={name}
      size="small"
      onChange={onChange}
      InputProps={{
        inputProps: {
          maxLength: 11,
        },
      }}
    />
  );
};

export default FormTextFieldPhone;
