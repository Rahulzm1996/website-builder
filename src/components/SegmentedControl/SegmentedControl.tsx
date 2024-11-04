import { useState } from "react";
import { Menu, MenuItem, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { StyledTab, StyledTabs } from "./styles";

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

const SegmentedControl = ({
  tabsConfig = [],
  onClick,
}: SegmentedControlProps) => {
  const [tabValue, setTabValue] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleTabChange = (_: React.SyntheticEvent, newValue: any) => {
    setTabValue(newValue);
    setAnchorEl(null);
    onClick(newValue);
  };

  const handleMenuOpen = (event: React.SyntheticEvent, menu: any) => {
    setTabValue(menu);
    setOpenMenu(menu);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
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
        {tabsConfig.map((tab) => {
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
