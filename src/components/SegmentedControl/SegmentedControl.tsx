import { useState } from "react";
import { Menu, MenuItem, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { StyledTab, StyledTabs } from "./styles";

interface SegmentedControlProps {
  /**
   * The currently selected value in the segmented control.
   * Can be a number or a string.
   */
  value?: number | string;

  /**
   * The default value for the segmented control when it first renders.
   * Can be a number or a string.
   */
  defaultValue?: number | string;

  /**
   * Configuration array for each tab in the segmented control.
   * Each object in the array represents an individual tab's settings.
   */
  tabsConfig: Array<{
    /**
     * Optional label to display on the tab.
     */
    label?: string;

    /**
     * The unique value associated with the tab.
     * Used to identify which tab is selected.
     */
    value?: string;

    /**
     * Optional icon to display alongside the tab label.
     * Should be a JSX element, such as an SVG or icon component.
     */
    icon?: JSX.Element;

    /**
     * Type of the tab, used to categorize or style tabs differently.
     */
    type: string;

    /**
     * Optional list of menu options associated with the tab.
     * Used for tabs with dropdown or additional options.
     */
    menuOptions?: string[];

    /**
     * Optional tooltip configuration for the tab.
     * Displays a tooltip with specified title and position when the tab is hovered.
     */
    tooltip?: {
      /**
       * Text to display within the tooltip.
       */
      title: string;

      /**
       * Position of the tooltip relative to the tab.
       * Possible values might include "top", "bottom", "left", or "right".
       */
      position: string;
    };
  }>;

  /**
   * Callback function triggered when a tab is clicked.
   * Receives the `value` of the clicked tab, or `undefined` if no value is set.
   */
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
