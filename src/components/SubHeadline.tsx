import { Typography } from "@mui/material";
import React from "react";
import { TypographyProps } from "@mui/material";

interface SubHeadlineProps {
  text: string;
  css?: React.CSSProperties;
  variant: TypographyProps["variant"];
}

const SubHeadline: React.FC<SubHeadlineProps> = (props) => {
  const { text, variant = "subtitle1", css } = props;

  return (
    <Typography variant={variant} sx={{ ...css }}>
      {text ?? "Sub heading text"}
    </Typography>
  );
};

export default SubHeadline;
