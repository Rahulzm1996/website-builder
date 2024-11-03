import { Stack, Typography } from "@mui/material";
import React from "react";
import { TypographyProps } from "@mui/material";

interface HeadlineProps {
  text: string;
  styles?: React.CSSProperties;
  variant: TypographyProps["variant"];
}

const Headline = (props: HeadlineProps) => {
  const { text, variant = "h5", styles } = props;

  return (
    <Stack>
      <Typography variant={variant} sx={{ ...styles }}>
        {text ?? "Heading text"}
      </Typography>
    </Stack>
  );
};

export default Headline;
