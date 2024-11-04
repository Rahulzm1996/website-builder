import { Drawer, Card, Stack } from "@mui/material";
import { styled } from "@mui/system";

const drawerWidth = 400;
export const StyledColumnDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "white",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },

  "& .columnsDrawerHeader": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f7fa",
    padding: "15px 20px",
  },
}));

export const Header = styled(Stack)({
  fontWeight: "bold",
  textAlign: "center",
  color: "#455a64",
});

export const LayoutCard = styled(Card)<{ disable?: boolean }>(
  ({ _, disable }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "8px",
    color: "#455a64",
    boxShadow: "none",
    border: "2px solid #f2f7fa",
    transition: "all 0.2s ease-in-out 0s",
    cursor: disable ? "not-allowed" : "pointer",

    "&:hover": {
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      transform: disable ? "none" : "rotate(5deg)",
      backgroundColor: "#f2f7fa",
      borderColor: "#e0ecf3",
    },
  })
);
