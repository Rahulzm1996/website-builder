import React, { useMemo, useState } from "react";
import {
  Button,
  FormHelperText,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { ElementProperties } from "../../types";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

interface ImageEditorProps {
  existingComponentProps: ElementProperties["props"];
  updateElementInColumn: (props: ElementProperties["props"]) => void;
}

const ImageEditor = ({
  existingComponentProps,
  updateElementInColumn,
}: ImageEditorProps) => {
  const [imageSrc, setImageSrc] = useState(existingComponentProps?.src || "");
  const [imageStyles, setImageStyles] = useState(
    JSON.stringify(existingComponentProps?.styles || {}, null, 2)
  );

  const [error, setError] = useState("");

  const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageSrc(e.target.value);
  };

  const handleStylesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImageStyles(e.target.value);
  };

  const handleSave = () => {
    try {
      const parsedStyles = JSON.parse(imageStyles);
      updateElementInColumn({
        ...existingComponentProps,
        src: imageSrc,
        styles: parsedStyles,
      });
    } catch (error) {
      setError("Invalid styles format. Please correct it.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Set the image source to the base64 string
      };
      reader.readAsDataURL(file); // Convert the file to a base64 URL
    }
  };

  const newImageStyles = useMemo(() => {
    try {
      return JSON.parse(imageStyles);
    } catch (error) {
      return existingComponentProps?.styles;
    }
  }, [imageStyles, existingComponentProps?.styles]);

  return (
    <Stack spacing={2}>
      <img src={imageSrc} alt={"image-alt"} style={newImageStyles} />
      <TextField
        label="Image Source URL"
        fullWidth
        variant="outlined"
        value={imageSrc}
        onChange={handleSrcChange}
      />
      <Button variant="contained" component="label">
        Upload Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>

      <Stack gap={1.5}>
        <FormLabel>Styles:</FormLabel>
        <BaseTextareaAutosize
          minRows={6}
          placeholder="Update styles here"
          name="styles"
          onChange={handleStylesChange}
          value={imageStyles}
          style={{ padding: "8px" }}
        />
        {error ? (
          <FormHelperText error={!!error}>{error}</FormHelperText>
        ) : null}
      </Stack>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Image Properties
      </Button>
    </Stack>
  );
};

export default ImageEditor;
