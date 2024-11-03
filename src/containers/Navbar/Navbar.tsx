import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  styled,
  Stack,
} from "@mui/material";
// import { styled } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import PopupIcon from "@mui/icons-material/OpenInBrowser"; // Assuming this as "Pop up" icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import LayersIcon from "@mui/icons-material/Layers";
import PreviewIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import { Fullscreen, ViewList, ViewModule, Code } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileCard from "./ProfileCard";

const Navbar = styled(AppBar)(({ theme }) => ({
  //   backgroundColor: "#ddeefe",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ToolbarContainer = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "white",
  boxShadow: "none",
  color: "black",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const IconGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

const NavbarComponent = () => {
  return (
    <>
      <CssBaseline />
      <Navbar>
        <ToolbarContainer>
          <ProfileCard />
        </ToolbarContainer>
      </Navbar>
      <Toolbar />
    </>
  );
};

export default NavbarComponent;
