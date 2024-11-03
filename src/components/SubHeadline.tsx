import { Stack, Typography } from "@mui/material";
import React from "react";
import { TypographyProps } from "@mui/material";

interface SubHeadlineProps {
  text: string;
  styles?: React.CSSProperties;
  variant: TypographyProps["variant"];
}

const SubHeadline = (props: SubHeadlineProps) => {
  const { text, variant = "subtitle1", styles } = props;

  return (
    <Stack>
      <Typography variant={variant} sx={{ ...styles }}>
        {text ?? "Sub heading text"}
      </Typography>
    </Stack>
  );
};

export default SubHeadline;
