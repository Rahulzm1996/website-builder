import { Typography } from "@mui/material";
import React from "react";
import { TypographyProps } from "@mui/material";

interface HeadlineProps {
  text: string;
  css?: React.CSSProperties;
  variant: TypographyProps["variant"];
}

const Headline: React.FC<HeadlineProps> = (props) => {
  const { text, variant = "h5", css } = props;

  return (
    <Typography variant={variant} sx={{ ...css }}>
      {text ?? "Heading text"}
    </Typography>
  );
};

export default Headline;
