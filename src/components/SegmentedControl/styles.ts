import { Tabs, Tab } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const StyledTabs = styled(Tabs)({
  backgroundColor: "#e6f0fa",
  width: "max-content",
  minHeight: "unset",
  borderBottom: "none",
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

export const StyledTab = styled(Tab)(() => ({
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
