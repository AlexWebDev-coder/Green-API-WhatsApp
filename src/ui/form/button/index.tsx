import { FC } from "react";
import { Button } from "@mui/material";
import { CustomButtonProps } from "./types";

const FormButton: FC<CustomButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props}>{props.children}</Button>;
};

export default FormButton;
