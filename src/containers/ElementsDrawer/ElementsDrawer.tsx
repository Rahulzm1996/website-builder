import React, { useState } from "react";
import {
  Drawer,
  TextField,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { DrawerProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import {
  addElement,
  toggleAddElementsDrawer,
  toggleColumnDrawer,
} from "../../store/formBuilderSlice";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import { componentDefaultPropsMap, DRAWER_ELEMENTS } from "../../contants";

const drawerWidth = 400;

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  minHeight: "100vh",
  overflow: "auto",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#white",
    // padding: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

const SearchBar = styled(TextField)({
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

const Header = styled(Stack)({
  fontWeight: "bold",
  textAlign: "center",
  color: "#455a64",
});

const CategoryTitle = styled(Typography)({
  marginTop: "16px",
  marginBottom: "8px",
  fontWeight: "bold",
  color: "#455a64",
});

const ItemCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  textAlign: "center",
  borderRadius: "8px",
  cursor: "pointer",
  color: "#455a64",
  boxShadow: "none",
  border: "1px solid #cfd8dc",
  "&:hover": {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
});

const itemsData = [
  {
    category: "Text",
    label: "HEADLINE",
    icon: "H",
    type: "HEADLINE",
    disable: true,
  },
  {
    category: "Text",
    label: "SUB-HEADLINE",
    icon: "A",
    type: "SUB_HEADLINE",
    disable: true,
  },
  {
    category: "Text",
    label: "PARAGRAPH",
    icon: "P",
    type: "PARAGRAPH",
    disable: true,
  },
  {
    category: "Text",
    label: "BULLET LIST",
    icon: "L",
    type: "LIST",
    disable: true,
  },
  {
    category: "Media",
    label: "IMAGE",
    icon: "🖼️",
    type: "IMAGE",
    disable: true,
  },
  {
    category: "Media",
    label: "IMAGE POPUP",
    icon: "🖼️",
    type: "IMAGE",
    disable: true,
  },
  {
    category: "Media",
    label: "VIDEO",
    icon: "▶️",
    type: "VIDEO",
    disable: true,
  },
  {
    category: "Media",
    label: "VIDEO POPUP",
    icon: "▶️",
    type: "VIDEO",
    disable: true,
  },
  {
    category: "Media",
    label: "AUDIO PLAYER",
    icon: "🔊",
    type: "AUDIO",
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: "HEADLINE",
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: "FORM",
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: "INPUT",
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: "TEXTAREA",
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: "SELECT",
    disable: true,
  },
  {
    category: "Form",
    label: "FORM INPUT",
    icon: "📋",
    type: "CHECKBOX",
    disable: true,
  },
  //advance form
  {
    category: "Advance Form",
    label: "SMS SIGN UP",
    icon: "📋",
    type: "FORM",
    disable: true,
  },
  {
    category: "Advance Form",
    label: "BILLING ADD",
    icon: "📋",
    type: "FORM",
    disable: true,
  },
  {
    category: "Advance Form",
    label: "SHIPPING ADD",
    icon: "📋",
    type: "FORM",
    disable: true,
  },
  {
    category: "Advance Form",
    label: "SURVEY",
    icon: "📋",
    type: "FORM",
    disable: true,
  },
];

interface ElementsDrawerProps {
  open: boolean;
}

const ElementsDrawer = ({ open }: ElementsDrawerProps) => {
  const dispatch = useFormBuilderDispatch();
  const { elementsDrawerConfig } = useFormBuilderSelector(
    (state) => state.formBuilder
  );
  console.log("elementsDrawerConfig", { elementsDrawerConfig });
  const { elementAttributes } = elementsDrawerConfig || {};
  const { sectionIdx, rowIdx, columnIdx } = elementAttributes || {};
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = DRAWER_ELEMENTS.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(filteredItems.map((item) => item.category))];

  console.log("categories", { categories });

  const closeDrawer = () => {
    dispatch(toggleAddElementsDrawer({ open: false, elementAttributes: {} }));
  };

  const onClose = (_, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason === "backdropClick") {
      closeDrawer();
    }
  };

  const addElementInColumn = (item: {
    category: string;
    label: string;
    icon: string;
    type: string;
    disable: boolean;
  }) => {
    const { disable = true, type } = item || {};
    const defaultProps = componentDefaultPropsMap[type] || {};
    console.log("addColumnsInRow", { item, elementAttributes, defaultProps });
    const componentToBeAdded = {
      id: uuidv4(),
      type,
      props: defaultProps.fieldProps,
    };
    if (!disable) {
      // handleAddNewElement({ sectionIdx, rowIdx, columnIdx });
      dispatch(
        addElement({
          sectionIdx,
          rowIdx,
          columnIdx,
          componentToBeAdded,
        })
      );
      closeDrawer();
    }
  };

  return (
    <SidebarDrawer
      open={open}
      onClose={onClose}
      variant="temporary"
      anchor="right"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#f2f7fa",
          padding: "15px 20px",
          // marginBottom: "16px",
        }}
      >
        <Header variant="h6">Add Elements</Header>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack
        sx={{
          padding: "16px 8px",
          height: "100%",
          flex: 1,
          overflow: "auto",
        }}
      >
        <SearchBar
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: <SearchIcon color="disabled" />,
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{
            padding: "0 8px",
          }}
        />
        <Stack
          sx={{
            height: "100%",
            overflow: "auto",
            paddingRight: "8px",
            padding: "0 8px",
          }}
        >
          {categories.map((category) => (
            <Box key={category}>
              <CategoryTitle variant="subtitle1">{category}</CategoryTitle>
              <Grid container spacing={2}>
                {filteredItems
                  .filter((item) => item.category === category)
                  .map((item) => {
                    const { category, disable, icon, label, type } = item;
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        key={label}
                        onClick={() => addElementInColumn(item)}
                      >
                        <ItemCard
                          sx={{
                            border: "2px solid #f2f7fa",
                            transition: "all 0.2s ease-in-out 0s",
                            cursor: disable ? "not-allowed" : "pointer",

                            ":hover": {
                              transform: disable ? "none" : "rotate(5deg)",
                              backgroundColor: "#f2f7fa",
                              borderColor: "#e0ecf3",
                            },
                          }}
                        >
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {icon}
                            </Typography>
                            <Typography variant="body2">{label}</Typography>
                          </CardContent>
                        </ItemCard>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          ))}
        </Stack>
      </Stack>
    </SidebarDrawer>
  );
};

export default ElementsDrawer;
