import React from "react";
import {
  Drawer,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";

const drawerWidth = 300;

const ColumnLayoutDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#E3F2FD",
    padding: "16px",
  },
});

const Header = styled(Typography)({
  fontWeight: "bold",
  paddingBottom: "16px",
  borderBottom: "1px solid #cfd8dc",
  textAlign: "center",
  color: "#455a64",
});

const LayoutCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80px",
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

const layoutOptions = [
  { label: "1 COLUMN" },
  { label: "2 COLUMN" },
  { label: "3 COLUMN" },
  { label: "4 COLUMN" },
  { label: "5 COLUMN" },
  { label: "6 COLUMN" },
  { label: "LEFT SIDEBAR" },
  { label: "RIGHT SIDEBAR" },
];

const ColumnLayoutSidebar = ({ open, onClose }) => {
  return (
    <ColumnLayoutDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="temporary"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header variant="h6">Add Row</Header>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2} marginTop={2}>
        {layoutOptions.map((option) => (
          <Grid item xs={6} key={option.label}>
            <LayoutCard>
              <CardContent>
                <ViewColumnIcon fontSize="large" color="disabled" />
                <Typography variant="body2" style={{ marginTop: "8px" }}>
                  {option.label}
                </Typography>
              </CardContent>
            </LayoutCard>
          </Grid>
        ))}
      </Grid>
    </ColumnLayoutDrawer>
  );
};

export default ColumnLayoutSidebar;
