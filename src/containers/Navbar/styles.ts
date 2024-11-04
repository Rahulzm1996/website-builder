import { AppBar, Toolbar, styled } from "@mui/material";

export const Navbar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ToolbarContainer = styled(Toolbar)(({ theme }) => ({
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
