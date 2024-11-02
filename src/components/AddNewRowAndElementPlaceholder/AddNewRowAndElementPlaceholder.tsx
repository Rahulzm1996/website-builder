import React from "react";
import { Button } from "@mui/material";
import { AddNewRowPlaceholderStyles } from "./styles";

const AddNewRowAndElementPlaceholder = ({
  buttonText,
  variant = "row",
  className,
  onClick,
}: {
  buttonText?: string;
  className?: string;
  variant?: "row" | "element";
  onClick: () => void;
}) => {
  const btnLightClassName = variant === "element" ? "btn-light6" : "btn-light5";
  return (
    <AddNewRowPlaceholderStyles
      variant={variant}
      onClick={onClick}
      className={className}
    >
      <Button className={`btn btn-slim ${btnLightClassName}`}>
        {buttonText}
      </Button>
    </AddNewRowPlaceholderStyles>
  );
};

export default AddNewRowAndElementPlaceholder;
