import React, { useState } from "react";
import {
  Drawer,
  TextField,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { DrawerProps } from "@mui/material";

const drawerWidth = 300;

const SidebarDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#E3F2FD",
    padding: "16px",
  },
});

const SearchBar = styled(TextField)({
  marginBottom: "16px",
  width: "100%",
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
  },
});

const CategoryTitle = styled(Typography)({
  marginTop: "16px",
  marginBottom: "8px",
  fontWeight: "bold",
  color: "#455a64",
});

const ItemCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  textAlign: "center",
  borderRadius: "8px",
  cursor: "pointer",
  color: "#455a64",
  boxShadow: "none",
  border: "1px solid #cfd8dc",
  "&:hover": {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
});

const itemsData = [
  { category: "Text", label: "HEADLINE", icon: "H" },
  { category: "Text", label: "SUB-HEADLINE", icon: "A" },
  { category: "Text", label: "PARAGRAPH", icon: "P" },
  { category: "Text", label: "BULLET LIST", icon: "L" },
  { category: "Media", label: "IMAGE", icon: "🖼️" },
  { category: "Media", label: "IMAGE POPUP", icon: "🖼️" },
  { category: "Media", label: "VIDEO", icon: "▶️" },
  { category: "Media", label: "VIDEO POPUP", icon: "▶️" },
  { category: "Media", label: "AUDIO PLAYER", icon: "🔊" },
  { category: "Form", label: "FORM INPUT", icon: "📋" },
  // Add more items as needed
];

const ElementsDrawer = ({ open, onClose }: DrawerProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = itemsData.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(filteredItems.map((item) => item.category))];

  return (
    <SidebarDrawer
      open={open}
      onClose={onClose}
      variant="permanent"
      anchor="right"
    >
      <SearchBar
        placeholder="Search"
        variant="outlined"
        InputProps={{
          startAdornment: <SearchIcon color="disabled" />,
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {categories.map((category) => (
        <Box key={category}>
          <CategoryTitle variant="subtitle1">{category}</CategoryTitle>
          <Grid container spacing={2}>
            {filteredItems
              .filter((item) => item.category === category)
              .map((item) => (
                <Grid item xs={6} key={item.label}>
                  <ItemCard>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {item.icon}
                      </Typography>
                      <Typography variant="body2">{item.label}</Typography>
                    </CardContent>
                  </ItemCard>
                </Grid>
              ))}
          </Grid>
        </Box>
      ))}
    </SidebarDrawer>
  );
};

export default ElementsDrawer;
