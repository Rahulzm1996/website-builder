import { Stack } from "@mui/material";
import React from "react";

interface ParagraphProps {
  text: string;
  styles?: React.CSSProperties;
}

const Paragraph = (props: ParagraphProps) => {
  const { text, styles } = props;

  return (
    <Stack>
      <p style={{ ...styles }}>{text ?? "Paragraph text"}</p>
    </Stack>
  );
};

export default Paragraph;
