import { Drawer, TextField, Typography, Card, Stack } from "@mui/material";
import { styled } from "@mui/system";

const drawerWidth = 400;
export const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  minHeight: "100vh",
  overflow: "auto",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "white",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },

  "& .elementsDrawerHeader": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f7fa",
    padding: "15px 20px",
  },

  "& .elementsContentWrapper": {
    padding: "16px 8px",
    height: "100%",
    flex: 1,
    overflow: "auto",
  },

  "& .searchBar": {
    padding: "0 8px",
  },

  "& .categoriesWrapper": {
    height: "100%",
    overflow: "auto",
    paddingRight: "8px",
    padding: "0 8px",
  },
}));

export const SearchBar = styled(TextField)({
  marginBottom: "16px",
  width: "100%",
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    color: "#2a3135",
    background: "#f3f8fb",
    transition: "all 0.2s ease-in-out 0s",

    "&:focus": {
      background: "#ecf3f8",
      outline: "none",
      boxShadow: "none",
    },
  },
});

export const Header = styled(Stack)({
  fontWeight: "bold",
  textAlign: "center",
  color: "#455a64",
});

export const CategoryTitle = styled(Typography)({
  marginTop: "16px",
  marginBottom: "8px",
  fontWeight: "bold",
  color: "#455a64",
});

export const ItemCard = styled(Card)<{ disable?: boolean }>(
  ({ _, disable }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
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
