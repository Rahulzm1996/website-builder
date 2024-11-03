// import React from "react";
// import styled from "@mui/material/styles/styled";
// import Box from "@mui/material/Box";

// const StyledBox = styled(Box)(({ theme }) => ({
//   width: "200px",
//   height: "200px",
//   background: theme.palette.primary.main,
// }));

// const Navbar = () => {
//   return (
//     <div>
//       <StyledBox />
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import PopupIcon from "@mui/icons-material/OpenInBrowser"; // Assuming this as "Pop up" icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import LayersIcon from "@mui/icons-material/Layers";
import PreviewIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import { Fullscreen, ViewList, ViewModule, Code } from "@mui/icons-material";

const Navbar = styled(AppBar)(({ theme }) => ({
  //   backgroundColor: "#ddeefe",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ToolbarContainer = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
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

const tabsConfig = [
  {
    label: "1",
    value: "1",
    icon: <Fullscreen />,
  },
  {
    label: "2",
    value: "2",
    icon: <ViewList />,
  },
  {
    label: "3",
    value: "3",
    icon: <ViewModule />,
  },
  {
    label: "4",
    value: "4",
    icon: <Code />,
  },
];

const NavbarComponent = () => {
  return (
    <Navbar position="static">
      <ToolbarContainer>
        {/* Left Side - Store Dropdown */}
        <Typography variant="h6" component="div">
          Converse Store #32
        </Typography>

        {/* Center - Action Icons */}
        <IconGroup>
          <IconButton color="inherit">
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <PopupIcon />
          </IconButton>
        </IconGroup>

        {/* Center - Section Controls */}
        <IconGroup>
          <IconButton color="inherit">
            <ViewColumnIcon />
            <Typography variant="body2">Sections</Typography>
          </IconButton>
          <IconButton color="inherit">
            <LayersIcon />
            <Typography variant="body2">Rows</Typography>
          </IconButton>
          <IconButton color="inherit">
            <LayersIcon />
            <Typography variant="body2">Columns</Typography>
          </IconButton>
          <IconButton color="inherit">
            <LayersIcon />
            <Typography variant="body2">Elements</Typography>
          </IconButton>
          <IconButton color="inherit">
            <PreviewIcon />
            <Typography variant="body2">Preview</Typography>
          </IconButton>
          <IconButton color="inherit">
            <SaveIcon />
            <Typography variant="body2">Save</Typography>
          </IconButton>
        </IconGroup>

        {/* Right Side - Profile and Misc Icons */}
        <IconGroup>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </IconGroup>
      </ToolbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
