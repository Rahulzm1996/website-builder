import React, { useState } from "react";
import { Tabs, Tab, Menu, MenuItem, Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
import Tooltip from "@mui/material/Tooltip";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MenuIcon from "@mui/icons-material/Menu";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import CodeIcon from "@mui/icons-material/Code";
import { TooltipProps } from "@mui/material/Tooltip";

interface SegmentedControlProps {
  value?: number | string;
  defaultValue?: number | string;
  tabsConfig: Array<{
    label?: string;
    value?: string;
    icon?: JSX.Element;
    type: string;
    menuOptions?: string[];
    tooltip?: {
      title: string;
      position: string;
    };
  }>;
  onClick: (value: string | undefined) => void;
}

// Styled components to match the custom styling
const StyledTabs = styled(Tabs)({
  backgroundColor: "#e6f0fa",
  width: "max-content",
  minHeight: "unset",
  borderBottom: "none",
  //   height: "40px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    height: "100%",
  },
  "& .MuiTab-root": {
    minHeight: "unset",
    textTransform: "unset",
    background: "white",

    "&:first-child": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
    "&:last-child": {
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
});

const StyledTab = styled(Tab)(() => ({
  minWidth: "unset",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  textTransform: "none",
  borderRight: "1px solid #e0ecf3",
  minHeight: "unset",
  padding: "9.5px 15px;",
  fontSize: ".875rem",
  background: "#fff",
  color: "#607179",
  fontWeight: 500,
  lineHeight: 1.5,
  textAlign: "center",
  whiteSpace: "nowrap",

  "&.Mui-selected": {
    backgroundColor: "#d0e8fd",
  },
  "&:hover": {
    background: "rgba(24, 139, 246, 0.1)",
    color: "#188bf6",
  },

  "& .MuiSvgIcon-root": {
    marginBottom: "unset",
    width: "21px",
    height: "21px",
  },
}));

const SegmentedControl = ({
  tabsConfig = [],
  onClick,
}: SegmentedControlProps) => {
  const [tabValue, setTabValue] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue); // Set the value instead of the index
    setAnchorEl(null);
    console.log("Selected tab value:", newValue);
    onClick(newValue);
  };

  const handleMenuOpen = (event, menu) => {
    console.log("Opening menu for:", menu);
    setTabValue(menu);
    setOpenMenu(menu);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    console.log("Clicked menu item:", option);
    handleMenuClose();
    onClick(option);
  };

  return (
    <Box>
      <StyledTabs
        value={tabValue}
        onChange={handleTabChange}
        variant="standard"
        aria-label="configurable tabs"
      >
        {tabsConfig.map((tab, index) => {
          const { label, icon, tooltip, type, value } = tab || {};
          const wrappedLabel = (
            <span style={{ marginLeft: "10px" }}>{label}</span>
          );
          return type === "normal" ? (
            <Tooltip
              title={tooltip?.title}
              placement={tooltip?.position ?? "top"}
              arrow
            >
              <StyledTab
                key={label}
                value={value}
                {...(icon ? { icon: icon } : {})}
                {...(label ? { label: wrappedLabel } : {})}
              />
            </Tooltip>
          ) : (
            <Tooltip
              title={tooltip?.title}
              placement={tooltip?.position ?? "top"}
              arrow
            >
              <StyledTab
                key={label}
                value={value}
                {...(icon ? { icon: icon } : {})}
                {...(label ? { label: wrappedLabel } : {})}
                onClick={(event) => handleMenuOpen(event, value)}
              />
            </Tooltip>
          );
        })}
      </StyledTabs>

      {tabsConfig.map((tab) => {
        const { label, type, menuOptions, value } = tab || {};
        return (
          type === "menu" && (
            <Menu
              key={label}
              anchorEl={anchorEl}
              open={openMenu === value}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  boxShadow: "0 8px 16px 5px rgba(0, 0, 0, 0.1)",
                },
              }}
              sx={{
                "& .MuiMenuItem-root": {
                  color: "#607179",
                  fontSize: ".875rem",
                  width: "100%",
                  padding: ".25rem 1.5rem",
                  fontWeight: 400,
                  textAlign: "inherit",
                  whiteSpace: "nowrap",
                },
              }}
            >
              {menuOptions?.map((option, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleMenuItemClick(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          )
        );
      })}
    </Box>
  );
};

export default SegmentedControl;
