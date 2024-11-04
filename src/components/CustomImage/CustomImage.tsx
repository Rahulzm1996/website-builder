import { Stack } from "@mui/material";
import React from "react";

interface ImageProps {
  src: string;
  className?: string;
  styles?: React.CSSProperties;
  alt?: string;
}

const CustomImage = (props: ImageProps) => {
  const { src, styles, alt, className } = props;

  return (
    <Stack>
      <img
        src={src}
        alt={alt ?? "image"}
        style={{ ...styles }}
        className={className}
      />
    </Stack>
  );
};

export default CustomImage;
