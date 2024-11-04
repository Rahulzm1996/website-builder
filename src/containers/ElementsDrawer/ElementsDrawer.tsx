import { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import {
  addElement,
  toggleAddElementsDrawer,
} from "../../store/formBuilderSlice";
import {
  useFormBuilderDispatch,
  useFormBuilderSelector,
} from "../../store/store";
import { componentDefaultPropsMap, DRAWER_ELEMENTS } from "../../contants";
import {
  CategoryTitle,
  Header,
  ItemCard,
  SearchBar,
  SidebarDrawer,
} from "./styles";

interface ElementsDrawerProps {
  open: boolean;
}

const ElementsDrawer = ({ open }: ElementsDrawerProps) => {
  const dispatch = useFormBuilderDispatch();
  const { elementsDrawerConfig } = useFormBuilderSelector(
    (state) => state.formBuilder
  );

  const { elementAttributes } = elementsDrawerConfig || {};
  const { sectionIdx, rowIdx, columnIdx } = elementAttributes || {};
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = DRAWER_ELEMENTS.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(filteredItems.map((item) => item.category))];

  const closeDrawer = () => {
    setSearchTerm("");
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
    const componentToBeAdded = {
      id: uuidv4(),
      type,
      props: defaultProps.fieldProps,
    };
    if (!disable) {
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
      <Box className="elementsDrawerHeader">
        <Header>Add Elements</Header>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack className="elementsContentWrapper">
        <SearchBar
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: <SearchIcon color="disabled" />,
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          className="searchBar"
        />
        <Stack className="categoriesWrapper">
          {categories.map((category) => (
            <Box key={category}>
              <CategoryTitle variant="subtitle1">{category}</CategoryTitle>
              <Grid container spacing={2}>
                {filteredItems
                  .filter((item) => item.category === category)
                  .map((item) => {
                    const { disable, icon, label } = item;
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        key={label}
                        onClick={() => addElementInColumn(item)}
                      >
                        <ItemCard disable={disable}>
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
