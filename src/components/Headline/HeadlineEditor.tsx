import { Button, TextField, Stack } from "@mui/material";
import React, { useState } from "react";
import { ComponentProperties } from "../../types";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

interface HeadlineEditorProps {
  existingComponentProps: ComponentProperties["props"];
  updateElementInColumn: (config: ComponentProperties["props"]) => void;
}

const HeadlineEditor = ({
  existingComponentProps,
  updateElementInColumn,
}: HeadlineEditorProps) => {
  const [editedProps, setEditedProps] = useState(existingComponentProps ?? {});
  const [jsonText, setJsonText] = useState(
    JSON.stringify(existingComponentProps?.styles, null, 2)
  );
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProps((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleStylesChange = (e) => {
    setJsonText(e.target.value);
  };

  const handleSave = () => {
    try {
      const parsedJSONStyles = JSON.parse(jsonText);
      setError("");

      updateElementInColumn({ ...editedProps, styles: parsedJSONStyles });
    } catch (error) {
      setError("Invalid JSON format for styles. Please correct it.");
    }
  };

  return (
    <Stack gap={1}>
      <FormLabel>Headline:</FormLabel>
      <Stack gap={2.5}>
        <TextField
          error={!editedProps.text}
          name="text"
          placeholder="Update headline here"
          value={editedProps.text}
          onChange={handleChange}
          variant="outlined"
          size="small"
          helperText={!editedProps.text ? "Heading cannot be empty." : ""}
        />
        <Stack gap={1.5}>
          <FormLabel>Styles:</FormLabel>
          <BaseTextareaAutosize
            minRows={6}
            placeholder="Update styles here"
            name="styles"
            onChange={handleStylesChange}
            value={jsonText}
            style={{ padding: "8px" }}
          />
          {error ? (
            <FormHelperText error={!!error}>{error}</FormHelperText>
          ) : null}
        </Stack>

        <Button type="primary" variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeadlineEditor;
