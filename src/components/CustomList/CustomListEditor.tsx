import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Switch,
  IconButton,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { ElementProperties } from "../../types";

interface CustomListEditorProps {
  existingComponentProps: ElementProperties["props"];
  updateElementInColumn: (config: ElementProperties["props"]) => void;
}

const CustomListEditor = ({
  existingComponentProps,
  updateElementInColumn,
}: CustomListEditorProps) => {
  const [items, setItems] = useState(existingComponentProps?.items || []);
  const [ordered, setOrdered] = useState(
    existingComponentProps?.ordered || false
  );
  const [styles, setStyles] = useState(
    JSON.stringify(existingComponentProps?.styles || {}, null, 2)
  );
  const [error, setError] = useState("");

  // Update an individual item in the list
  const handleItemChange = (index: number, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? value : item))
    );
  };

  // Add a new item to the list
  const handleAddItem = () => {
    setItems([...items, ""]);
  };

  // Remove an item from the list
  const handleRemoveItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Update styles as JSON
  const handleStylesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStyles(e.target.value);
  };

  // Toggle ordered/unordered list
  const handleOrderedToggle = () => {
    setOrdered((prevOrdered) => !prevOrdered);
  };

  // Save updated list props
  const handleSave = () => {
    try {
      const parsedJSONStyles = JSON.parse(styles);
      setError("");
      updateElementInColumn({ items, ordered, styles: parsedJSONStyles });
    } catch (error) {
      setError("Invalid styles format. Please correct it.");
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Custom List Editor</Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>Ordered</Typography>
        <Switch checked={ordered} onChange={handleOrderedToggle} />
      </Stack>

      <Typography variant="subtitle1">List Items</Typography>
      {items.map((item, index) => (
        <Stack key={index} direction="row" alignItems="center" spacing={1}>
          <TextField
            label={`Item ${index + 1}`}
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
            variant="outlined"
            fullWidth
          />
          <IconButton onClick={() => handleRemoveItem(index)}>
            <Delete />
          </IconButton>
        </Stack>
      ))}

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleAddItem}
        color="primary"
      >
        Add Item
      </Button>

      <Stack gap={1.5}>
        <FormLabel>Styles:</FormLabel>
        <BaseTextareaAutosize
          minRows={6}
          placeholder="Update styles here"
          name="styles"
          onChange={handleStylesChange}
          value={styles}
          style={{ padding: "8px" }}
        />
        {error ? (
          <FormHelperText error={!!error}>{error}</FormHelperText>
        ) : null}
      </Stack>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save List Properties
      </Button>
    </Stack>
  );
};

export default CustomListEditor;
