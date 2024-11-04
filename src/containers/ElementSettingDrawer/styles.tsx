import { Drawer, Stack } from "@mui/material";
import { styled } from "@mui/system";

const drawerWidth = 400;
export const EditElementDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  minHeight: "100vh",
  overflow: "auto",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#white",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },

  "& .editElementDrawerHeader": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f7fa",
    padding: "15px 20px",
  },

  "& .editElementWrapper": {
    padding: "24px",
    height: "100%",
    flex: 1,
    overflow: "auto",
  },
}));

export const Header = styled(Stack)({
  fontWeight: "bold",
  textAlign: "center",
  color: "#455a64",
});
